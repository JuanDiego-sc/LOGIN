import { Component} from 'react'
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import { User } from './models/User';
import './App.css'

const url = 'https://localhost:5002/api/user/';

class App extends Component {

  state={
    data: [] as User[],
    insertModal: false,
    deleteModal: false,
    kindModal: '',
    form:{
      name: '',
      email: '',
      role: '',
      password: '',
    },
  }

  getRequest=()=>{
    axios.get(url).then((response)=>{
      this.setState({data: response.data});
      console.log(response.data);
    }).catch((error)=>{
      console.log(error.message);
    })
  }

  postRequest=async()=>{
    if (!this.validateForm()) return;

    await axios.post(url, this.state.form).then((response)=>{
    this.modalInsert();
    this.getRequest();
    }).catch((error)=>{
      console.log(error.message);
    }
    )
  }

  putRequest=async()=>{
    if (!this.validateForm()) return;

    await axios.put(url+this.state.form.id, this.state.form).then((response)=>{
      this.modalInsert();
      this.getRequest();
    }).catch((error)=>{
      console.log(error.message);
    });
  }

  deleteRequest=async()=>{
    await axios.delete(url+this.state.form.id).then((response)=>{
      this.setState({deleteModal: false});
      this.getRequest();
    }).catch((error)=>{
      console.log(error.message);
    });
  }

  validateForm = (): boolean => {
    const { name, email, role, password } = this.state.form;
    if (!name || !email || !role || !password) {
      alert("Por favor, complete todos los campos.");
      return false;
    }
    if (/\d/.test(name)) {
      alert("El campo nombre no debe contener números.");
      return false;
    }
    return true;
  }

  modalInsert=()=>{
    this.setState({insertModal: !this.state.insertModal});
  }

  selectUser=(user: User)=>{
    this.setState({
      kindModal: 'update',
      form:{
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        password: user.password,
      }
    });
  }

  handleChange = async (e: React.ChangeEvent<HTMLInputElement>) =>{
    e.persist();
    await this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state.form);
  }

componentDidMount(): void {
  this.getRequest();
}

  render(){
    const {form} = this.state;
    return (
      <div className='App'>
        <br />
          <button className='btn btn-success' onClick={()=>
            {this.setState({
              kindModal: 'insert',
              form: {
                name: null,
                email: null,
                role: null,
                password: null,
              }
            }); 
            this.modalInsert()}}>
              Agregar Usuario
          </button>
          <br /><br />
          <table className='table table-bordered'>
          <thead>
              <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map(user=>{
                return(
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                      <button className='btn btn-primary' onClick={()=>{this.selectUser(user);
                         this.modalInsert()}}>
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      &nbsp;
                      <button className='btn btn-danger' onClick={()=>{this.selectUser(user); 
                        this.setState({deleteModal: true})}}>
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        <Modal isOpen={this.state.insertModal}>
        <ModalHeader style={{display: 'block'}}>
          <span style={{float: 'right'}} onClick={()=>this.modalInsert()}>x</span>
        </ModalHeader>
        <ModalBody>
          <div className='form-group'>
            <label htmlFor='name'>Nombre</label>
            <input type='text' className='form-control' name='name' onChange={this.handleChange} value={form? form.name : ''} />
            <br />
            <label htmlFor='email'>Email</label>
            <input type='text' className='form-control' name='email' onChange={this.handleChange} value={form? form.email : ''}/>
            <br />

            <label htmlFor='role'>Role</label>
            <select type='text' 
            className='form-control' 
            name='role'
            onChange={this.handleChange} 
             value={form? form.role : ''}
            >
              <option value=''>Seleccionar</option>
              <option value='admin'>Admin</option>
              <option value='user'>User</option>
            </select>
            
            <br />
            <label htmlFor='password'>Password</label>
            <input type='text' className='form-control' name='password' onChange={this.handleChange} value={form.password}/>
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          {this.state.kindModal === 'update' ?
          <button className='btn btn-primary' onClick={()=>this.putRequest()}>Actualizar</button> 
          : <button className='btn btn-success' onClick={()=>this.postRequest()}>Insertar</button>
          }
          <button className='btn btn-danger' onClick={()=>this.modalInsert()}>Cancelar</button>
        </ModalFooter>
          </Modal>

        <Modal isOpen={this.state.deleteModal}>
          <ModalBody>
            <h1>Eliminar Usuario</h1>
            <p>¿Estas seguro de eliminar el usuario?</p>
            {form && <p>Nombre: {form.name}</p>}
          </ModalBody>
          <ModalFooter>
            <button className='btn btn-danger' onClick={()=>this.deleteRequest()}>Eliminar</button>
            <button className='btn btn-secondary' onClick={()=>this.setState({deleteModal : false})}>Cancelar</button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default App
