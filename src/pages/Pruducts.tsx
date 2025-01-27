import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "@store/hooks";
import { actGetProductsByCatPrifix, ProductsCleanUp } from "@store/products/productsSlice";
import { Container, Row, Col } from "react-bootstrap";
import { Product } from "@components/eCommerce";
const Products = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector(
    (state) => state.Products
  );
  useEffect(() => {
    dispatch(actGetProductsByCatPrifix(params.prefix as string));
    return () => {
      dispatch(ProductsCleanUp());
    };
  }, [dispatch, params]);

  const renderProducts = 
  records.length > 0 ? 
    records.map((record) => (
      <Col xs={6} md={3} key={record.id} className="d-flex justify-content-center mb-5 mt-2">
        <Product {...record}/>
      </Col>
    ))
   : <p>There are no products</p>
  
 
  return (
    <Container>
      <Row>
        {renderProducts}
      </Row>
    </Container>
  );
};

export default Products;