import React from 'react'
import axios from 'axios';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
class ReactUploadImage extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            file: null,
            imageLink:"",
            HouseId:" ",
            HouseDistance:" ",
            SecurityDeposit:" ",
            LabelHouse:"",
            Bedding:" ",
            HouseRent:" ",
            Furnished:" ",
            Gender:" ",
            Area:" ",
            HouseName:" ",
            StatusTag:" ",
            RoomDesc:" "
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    
    onFormSubmit(e){
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('myImage',this.state.file);
        formData.append('houseId',this.state.HouseId)
        formData.append('houseName',this.state.HouseName)
        formData.append('statusTag',this.state.StatusTag)
        formData.append('labelHouse',this.state.LabelHouse)
        formData.append('area',this.state.Area)
        formData.append('furnished',this.state.Furnished)
        formData.append('bedding',this.state.Bedding)
        formData.append('houseRent',this.state.HouseRent)
        formData.append('securityDeposit',this.state.SecurityDeposit)
        formData.append('houseDistance',this.state.HouseDistance)
        formData.append('gender',this.state.Gender)
        formData.append('roomDesc',this.state.RoomDesc)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post("/api/irooms/upload",formData,config)
            .then((response) => {
                alert("The file is successfully uploaded");
            }).catch((error) => {
                alert("error caused");
        });
        console.log(this.state);
    }
    onChange(e) {
        this.setState({file:e.target.files[0]});
       
    }
    onChangeHandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render() {
        
        return (
          
            <div style={{margin:"10% 20%"}}>
                <h1 style={{textAlign:"center"}}>Admin panel</h1>
                  <Form onSubmit={this.onFormSubmit}>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">HouseName</Label>
              <Input type="text" name="HouseName"  placeholder="enter your housename" onChange={this.onChangeHandler} />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">HouseId</Label>
              <Input type="text" name="HouseId"  placeholder="enter house id" onChange={this.onChangeHandler}/>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
            <Col md={6}>
                <FormGroup>
                    <Label for="example HouseDistance">HouseDistance</Label>
                    <Input type="text" name="HouseDistance" placeholder="enter HouseDistance " onChange={this.onChangeHandler}/>
                </FormGroup>
            </Col>
            <Col md={6}>
                <FormGroup>
                    <Label for="example StatusTag">StatusTag</Label>
                    <Input type="text" name="StatusTag" placeholder="enter StatusTag in all small letter " onChange={this.onChangeHandler}/>
                </FormGroup>
            </Col>
        </Row>
        <Row form>
            <Col md={6}>
                <FormGroup>
                    <Label for="example">HouseRent</Label>
                    <Input type="text" name="HouseRent" placeholder="enter HouseRent " onChange={this.onChangeHandler}/>
                </FormGroup>
            </Col>
            <Col md={6}>
                <FormGroup>
                    <Label for="example SecurityDeposit">SecurityDeposit</Label>
                    <Input type="text" name="SecurityDeposit" placeholder="enter SecurityDeposit " onChange={this.onChangeHandler}/>
                </FormGroup>
            </Col>
        </Row>
        <Row form>
            <Col md={6}>
                <FormGroup>
                    <Label for="example LabelHouse">LabelHouse</Label>
                    <Input type="text" name="LabelHouse" placeholder="enter LabelHouse " onChange={this.onChangeHandler}/>
                </FormGroup>
            </Col>
            <Col md={6}>
                <FormGroup>
                    <Label for="example Area">Area</Label>
                    <Input type="text" name="Area" placeholder="enter Area " onChange={this.onChangeHandler}/>
                </FormGroup>
            </Col>
        </Row>
        <Row form>
            <Col md={4}>
                <FormGroup>
                    <Label for="example Bedding">Bedding</Label>
                    <Input type="text" name="Bedding" placeholder="enter Bedding " onChange={this.onChangeHandler}/>
                </FormGroup>
            </Col>
            <Col md={4}>
                <FormGroup>
                    <Label for="example Furnsihed">Furnished</Label>
                    <Input type="text" name="Furnished" placeholder="enter furnished" onChange={this.onChangeHandler}/>
                </FormGroup>
            </Col>
            <Col md={4}>
                <FormGroup>
                    <Label for="example Gender">Gender</Label>
                    <Input type="text" name="Gender" placeholder="enter Gender " onChange={this.onChangeHandler}/>
                </FormGroup>
            </Col>
        </Row>
            <Row>
            <Col md={6}>
                <FormGroup>
                    <Label for="example Gender">Image</Label>
                    <Input type="file" name="myImage"  onChange={this.onChange} />
                </FormGroup>
            </Col>
            <Col md={6}>
            <FormGroup>
                    <Label for="example desc">Description</Label>
                    <Input type="text" name="RoomDesc" onChange={this.onChangeHandler}/>
                </FormGroup>
            </Col>
            </Row>
            <Row>
                <Col md="12">
            <Button type="submit" color="success">Submit</Button>
            </Col>
            </Row>
        </Form>

            </div>

        )
    }
}

export default ReactUploadImage