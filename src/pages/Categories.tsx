import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Category } from "@components/eCommerce";
import { useAppSelector, useAppDispatch } from "@store/hooks";
import { actGetCategories } from "@store/categories/categoriesSlice";
const Categories = () => {
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector(
    (state) => state.Categories
  );
  useEffect(() => {
    if(!records.length){
      dispatch(actGetCategories());
    }  
  }, [dispatch, records]);
  const renderCategories = 
    records.length > 0 ? (
      records.map((record) => (
        <Col xs={6} md={3} key={record.id} className="d-flex justify-content-center mb-5 mt-2">
          <Category {...record}/>
        </Col>
      ))
    ) : 
      <p>There are no categories</p>
    
  return (
    <Container>
      <Row>
       {renderCategories}
      </Row>
    </Container>
  );
};

export default Categories;
