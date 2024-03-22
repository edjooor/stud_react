import React from "react";
import InputCreate from "./UI/input/InputCreate";
import SelectSort from "./UI/select/SelectSort";

const PostFilter = ({filter, setFilter}) => {
    return(
        <div>
            <InputCreate placeholder='search'
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value})}
        />
        <SelectSort 
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        options={[
          {value: 'title', name: 'by title'},
          {value: 'body', name: 'by description'}
        ]} 
        defaultOption={'sort by'}/>

        </div>
    );
};

export default PostFilter;