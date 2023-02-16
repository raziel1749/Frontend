import React from "react";

const Td = ({item, handleRemove, handleEdit}) => {
    const onRemove = () => {
        handleRemove(item.id)
    }

    const onEdit = () => {
        handleEdit(item);
    }

    return (
        <>
        <tr className='"bg-white border-2 border-gray-200"'>
            <td className='px-4 py-3'>{item.id}</td>
            <td className='px-4 py-3'>{item.companyName}</td>
            <td className='px-4 py-3'>{item.itemCode}</td>
            <td className='px-4 py-3'>{item.item}</td>
            <td className='px-4 py-3'>{item.itemNo}</td>
            <td className='px-4 py-3'>{item.pn}</td>
            <td className='px-4 py-3'>{item.itemGroup}</td>
            <td className='px-4 py-3'>{item.itemSize}</td>
            <td className='px-4 py-3'>{item.unit}</td>
            <td className='px-4 py-3'>{item.purUnit}</td>
            <td className='px-4 py-3'>{item.purCnt}</td>
            <td className='px-4 py-3'>{item.distUnit}</td>
            <td className='px-4 py-3'>{item.distCnt}</td>
            <td className='px-4 py-3'>{item.yieldUnit}</td>
            <td className='px-4 py-3'>{item.yieldCnt}</td>
            <td onClick={onEdit} className='text-center text-purple-400 cursor-pointer show-modal'>
                <i class="far fa-edit"></i>
            </td>
            <td onClick={onRemove} className='text-center text-purple-400 cursor-pointer'>
                <i class="far fa-trash-alt"></i>
            </td>
        </tr>
        </>
    )

};

export default Td;