import { Navigate } from 'react-router-dom';
import { useAuth} from '../auth/authProvider';
import DefaultLayout from '../Layout/DefaultLayout';

export default function Dashboard(){

   const auth = useAuth();
   
   if (auth.role !== "user") {
    return <Navigate to="/" replace />;
}
      
    return(
    <>
        <DefaultLayout>
        <h1>Hola, {auth.userName}</h1>
        <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmc5dmJlcnRnMHFkaG0zNzcxNHdvdTdlM211am5xMnJwdTRrdHBjNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GRPy8MKag9U1U88hzY/giphy.gif"></img>
        </DefaultLayout>
    </>
    
    )
}