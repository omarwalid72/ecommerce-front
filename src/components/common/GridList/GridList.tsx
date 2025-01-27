import { Row, Col } from "react-bootstrap";

import React from "react";
type GridListProps<T> = {
  records: T[];
  renderItem: (item: T) => React.ReactNode;
};
type HasId = {
  id?: number;
};

const GridList = <T extends HasId>({ records, renderItem }: GridListProps<T>) => {
  const renderCategories =
    records.length > 0 ? (
      records.map((record) => (
        <Col
          xs={6}
          md={3}
          key={record.id}
          className="d-flex justify-content-center mb-5 mt-2"
        >
          {renderItem(record)}
        </Col>
      ))
    ) : (
      <p>There are no categories</p>
    );
  return <Row>{renderCategories}</Row>;
};

export default GridList;
