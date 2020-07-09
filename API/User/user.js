const express = require('express');
const router = new express.Router();
const bcrypt=require('bcryptjs')
const config=require('config')
const jwt=require('jsonwebtoken')
const User = require('../../Modal/user')
const Car=require('../../Modal/cars');
const auth=require('../middleware/auth');
router.post('/',(req,res)=>{
   const {name,email,password}=req.body;
   if(!name || !email || !password)
   {
       res.status(400).json({msg:"Please enter all fieds"});
   }
   User.findOne({email}).then(user=>{
       if(user) return res.status(400).json({message:"user already exit"});
   });
   const newUser=new User({
       name, email, password
   });
  bcrypt.genSalt(8,(err,salt)=>{
      bcrypt.hash(newUser.password,salt,(err,hash)=>{
          if(err) throw err;
          newUser.password=hash;
          newUser.save().then(user=>{
              jwt.sign({
                  id:user.id
              },
              config.get("jwtSecret"),{
                  expiresIn:3600
              },
              (err,token)=>{
                  if(err) throw new err ;
                  res.json({
                      token:token,
                    user:{
                        id:user.id ,
                        name:user.name,
                        email:user.email
                    }
                })
              })
              
          }).catch((e)=>{
            res.json({
              message:"error occured  while registering"
            })
          })
      })
  })
})


//login


router.post('/login', (req, res) => {
    const { email, password } = req.body;
  
    // Simple validation
    if(!email || !password) {
      return res.status(400).json({ msg: 'Please enter all fields' });
    }
  
    // Check for existing user
    User.findOne({ email })
      .then(user => {
        if(!user) return res.status(400).json({ msg: 'User Does not exist' });
  
        // Validate password
        bcrypt.compare(password, user.password)
          .then(isMatch => {
            if(!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });
  
            jwt.sign(
              { id: user.id },
              config.get('jwtSecret'),
              { expiresIn: 3600 },
              (err, token) => {
                if(err) throw err;
                res.json({
                  token,
                 id:user.id,
                  user: {
                    id: user.id,
                    name: user.name,
                    email: user.email
                  }
                });
              }
            )
          })
      })
  });
  
  router.get('/user/:userId',auth, (req, res) => {
    const {userId}=req.params;
    User.findById(userId)
       .select('-password')
       .then(user => res.json(user)).catch(err => res.status(404).json({ success: false }));
   });

   router.get('/:userId/cart',async (req,res,next)=>{
     const { userId }=req.params;
     const user=await User.findById(userId).populate('cart');
     res.status(200).send(user.cart);
     
   })
router.post('/:userId/cart',async (req,res,next)=>{
  const {userId}=req.params;
  const newCar=new Car(req.body);
  const user=await User.findById(userId);

  newCar.seller=user;
  await newCar.save()
  user.cart.push(newCar);
  //save the user
  await user.save();
  res.status(201).json(newCar);
})
module.exports = router;