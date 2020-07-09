import React,{Component} from 'react';
import Header from '../Header/header';
import{connect} from 'react-redux';
import LoginHeader from '../LoginHeader/loginheader';
import PropTypes from 'prop-types';
class completeHeader extends Component{
    static propTypes = {
        auth: PropTypes.object.isRequired
      };
    
    render()
    {
        const { isAuthenticated } = this.props.auth;
        return (<div>
            {isAuthenticated?<LoginHeader></LoginHeader>:<Header></Header>}
        </div>);
    }
}
const mapStateToProps = state => ({
    auth: state.auth
  });
  
export default connect(mapStateToProps,null)(completeHeader);