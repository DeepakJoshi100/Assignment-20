import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { getProductList } from "./api";
import NoMatching from "./NoMatching";
import Loading from "./Loading";

function MainProductList() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");

  useEffect(function () {
    const xyz = getProductList();
    xyz.then(function (products) {
      setProductList(products);
      setLoading(false);
    });
  }, []);

  let data = productList.filter(function (item) {
    const lowerCaseTitle = item.title.toLowerCase();
    const lowerCaseQuery = query.toLowerCase();
    return lowerCaseTitle.indexOf(lowerCaseQuery) != -1;
  });

  if (sort == "name") {
    data.sort(function (x, y) {
      return x.title < y.title ? -1 : 1;
    });
  } else if (sort == "pricelow") {
    data.sort(function (x, y) {
      return x.price - y.price;
    });
  } else if (sort == "pricehigh") {
    data.sort(function (x, y) {
      return y.price - x.price;
    });
  }

  function handleQueryChange(event) {
    setQuery(event.target.value);
  }
  function handleSortChange(event) {
    setSort(event.target.value);
  }
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div class="bg-white mt-8 mx-1 pt-8 mb-4 pb-4 mx-4 grow">
        <div class="sm:flex sm:justify-between max-w-4xl mx-auto mb-4 sm:mb-12">
          <div>
            <input
              className="m-2 border border-2 border-black rounded-md sm:m-0"
              value={query}
              placeholder="Search"
              onChange={handleQueryChange}
            />
          </div>

          <div>
            <select
              onChange={handleSortChange}
              value={sort}
              className="border border-2 border-black rounded-md"
            >
              <option value="default">Default Sort:</option>
              <option value="name">Sort By Title</option>
              <option value="pricelow">Sort By Price: Low To High</option>
              <option value="pricehigh">Sort By Price: High To Low</option>
            </select>
          </div>
        </div>

        {data.length > 0 && <ProductList products={data} />}
        {data.length == 0 && <NoMatching />}
      </div>
    </>
  );
}

export default MainProductList;
