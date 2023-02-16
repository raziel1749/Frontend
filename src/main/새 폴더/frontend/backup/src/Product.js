import React from 'react';
import TopMaterialTable from './TopMaterialTable'
import BottomMaterialTable from './BottomMaterialTable'

const Product = (props) => {
    return (
        <>
            <h3>                    
                <div align="left" aria-colspan={4} >
                    <TopMaterialTable />
                </div>
                    <h1 align="left" colSpan={4}>품목 목록</h1>
                <BottomMaterialTable />
            </h3>
        </>
    );
}

export default Product;