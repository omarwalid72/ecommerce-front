import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "@store/hooks";
import { actGetProductsByCatPrifix, ProductsCleanUp } from "@store/products/productsSlice";
import { Container} from "react-bootstrap";
import { Product } from "@components/eCommerce";
import { Loading } from "@components/feedback";
import { GridList } from "@components/common";

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

 
  
 
  return (
    <Container>
      <Loading status={loading} error={error}>
        <GridList records={records} renderItem={(record) => <Product {...record} />} />
      </Loading>
    </Container>
  );
};

export default Products;