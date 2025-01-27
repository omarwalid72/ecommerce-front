import { Link,useRouteError, isRouteErrorResponse } from "react-router-dom"
import { Container } from "react-bootstrap"
import '../style/global.css'

const Error = () => {
    const error = useRouteError()
    let errorStatus: number;
    let errorStatusText: string;
    if(isRouteErrorResponse(error)){
        errorStatus = error.status
        errorStatusText = error.statusText
    }else{
        errorStatus = 404
        errorStatusText = "Page not found"
    }
  return (
    <Container className="error-container">
        <h1 className="error-heading">{errorStatus}</h1>
        <p className="error-paragraph">{errorStatusText}</p>
        <Link to="/" replace={true} className="error-link">Back to Home</Link> 
    </Container>
  )
}

export default Error