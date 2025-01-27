import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { GridList } from "@components/common";
import { Category } from "@components/eCommerce";
import { useAppSelector, useAppDispatch } from "@store/hooks";
import { actGetCategories } from "@store/categories/categoriesSlice";
import { Loading } from "@components/feedback";
const Categories = () => {
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector(
    (state) => state.Categories
  );
  useEffect(() => {
    if (!records.length) {
      dispatch(actGetCategories());
    }
  }, [dispatch, records]);

  
   

  return (
    <Container>
      <Loading status={loading} error={error}>
        <GridList records={records} renderItem={(record) => <Category {...record} />} />
      </Loading>
    </Container>
  );
};

export default Categories;
