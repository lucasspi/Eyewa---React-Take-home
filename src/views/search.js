import React, { useState } from "react";
import { Input, Row, Form, Button } from "reactstrap";
import { Colxx } from "../components/CustomCol";

function SearchPage() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Row className="container justify-content-center align-items-center w-100">
        <Colxx md="10" sm="12">
          <Input
            bsSize="lg" 
            placeholder="Type to start"
            className="input-default"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </Colxx>
        <Colxx md="2" sm="12">
          <button className="btn-custom">SEARCH</button>
        </Colxx>
      </Row>
    </>
  );
}

export default SearchPage;
