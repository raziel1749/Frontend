import React, { useEffect, useState, useRef} from "react";
import axios from 'axios';
import Tr from './Tr';
import Post from './Post';
import Modal from './Modal';

const Board = () => {
    const [info, setInfo] = useState([]);
    const [selected, setSelected] = useState('');
    const [modalOn, setModalOn] = useState(false);

    const nextId = useRef(11)

    useEffect(() =>{
        axios.get('/api')
            .then(res => setInfo(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleSave = (data) => {
        if (data.id){
            setInfo(
                info.map(row => data.id === row.id ? {
                    id: data.id,
                    companyName : data.companyName,
                    itemCode : data.itemCode,
                    item : data.item,
                    itemNo : data.itemNo,
                    pn : data.pn,
                    itemGroup : data.itemGroup,
                    itemSize : data.itemSize,
                    unit : data.unit,
                    purUnit : data.purUnit,
                    purCnt : data.purCnt,
                    distUnit : data.distUnit,
                    distCnt : data.distCnt,
                    yieldUnit : data.yieldUnit,
                    yieldCnt : data.yieldCnt
                } : row))
        } else {
            setInfo(info => info.concat(
                {
                    id: nextId.current,
                    companyName : data.companyName,
                    itemCode : data.itemCode,
                    item : data.item,
                    itemNo : data.itemNo,
                    pn : data.pn,
                    itemGroup : data.itemGroup,
                    itemSize : data.itemSize,
                    unit : data.unit,
                    purUnit : data.purUnit,
                    purCnt : data.purCnt,
                    distUnit : data.distUnit,
                    distCnt : data.distCnt,
                    yieldUnit : data.yieldUnit,
                    yieldCnt : data.yieldCnt
                }
            ))
            nextId.current += 1;
        }
    }

    const handleRemove = (id) => {
        setInfo(info => info.filter(item => item.id !== id));
    }

    const handleEdit = (item) => {
        setModalOn(true);
        const selectedData = {
            id: item.id,
            companyName : item.companyName,
            itemCode : item.itemCode,
            item : item.item,
            itemNo : item.itemNo,
            pn : item.pn,
            itemGroup : item.itemGroup,
            itemSize : item.itemSize,
            unit : item.unit,
            purUnit : item.purUnit,
            purCnt : item.purCnt,
            distUnit : item.distUnit,
            distCnt : item.distCnt,
            yieldUnit : item.yieldUnit,
            yieldCnt : item.yieldCnt
        };
        console.log(selectedData);
        setSelected(selectedData);
    };

    const handleCancel = () => {
        setModalOn(false);
    }

    const handleEditSubmit = (item) => {
        console.log(item);
        handleSave(item);
        setModalOn(false);
    }

    return (
        <div className="container max-w-screen-lg mx-auto">
            <Post onSaveData={handleSave} />
            {modalOn && <Modal selectedData={selected} handleCancel={handleCancel}
                               handleEditSubmit={handleEditSubmit} />}
            <div className='text-xl font-bold mt-5 mb-3 text-center'>품목목록</div>
            <table className="min-w-full table-auto text-gray-800">
                <thead className='justify-between'>
                    <tr className='bg-gray-800'>
                        <th className="text-gray-300 px-4 py-3">Id.</th>
                        <th className="text-gray-300 px-4 py-3">회사</th>
                        <th className="text-gray-300 px-4 py-3">품목코드</th>
                        <th className="text-gray-300 px-4 py-3">품목명</th>
                        <th className="text-gray-300 px-4 py-3">품목유형</th>
                        <th className="text-gray-300 px-4 py-3">P/N</th>
                        <th className="text-gray-300 px-4 py-3">품목군</th>
                        <th className="text-gray-300 px-4 py-3">규격</th>
                        <th className="text-gray-300 px-4 py-3">수불단위</th>
                        <th className="text-gray-300 px-4 py-3">매입단위</th>
                        <th className="text-gray-300 px-4 py-3">매입단위수량</th>
                        <th className="text-gray-300 px-4 py-3">소요단위</th>
                        <th className="text-gray-300 px-4 py-3">소요단위수량</th>
                        <th className="text-gray-300 px-4 py-3">수율단위</th>
                        <th className="text-gray-300 px-4 py-3">수율단위수량</th>
                    </tr>
                </thead>
                <Tr info={info} handleRemove={handleRemove} handleEdit={handleEdit} />
            </table>
        </div>
    );
};

export default Board;