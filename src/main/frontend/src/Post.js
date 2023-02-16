import React, {useState} from "react";

const Post = ({ onSaveData }) => {
    const [form, setForm] = useState({
        companyName : '',
        itemCode : '',
        item : '',
        itemNo : '',
        itemGroup : ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSaveData(form)
        console.log(form);
        setForm({
            companyName : '',
            itemCode : '',
            item : '',
            itemNo : '',
            itemGroup : ''
            }
        )
    }

    return (
        <>
        <div className='text-xl font-bold mt-5 mb-2 text-cneter'>품목단위정보 등록</div>
        <form className="mt-3" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row mb-1">
                <label htmlFor="companyName" className="w-full flex-1 mx-2 text-xs font-semibold text-gray-600 uppercase">회사 이름
                    <input className="w-full py-3 px-1 mt-1 text-gray-800 appearance-none border-2 border-gray-100
                    focus:text-gray-500 focus:outline-noe focus:border-gray-200" required placeholder='회사명을 입력해주세요.' type="text"
                           name='companyName' value={form.companyName} onChange={handleChange} />
                </label>
                <label htmlFor="itemCode" className="w-full flex-1 mx-2 text-xs font-semibold text-gray-600 uppercase">품목 코드
                    <input className="w-full py-3 px-1 mt-1 text-gray-800 appearance-none border-2 border-gray-100
                    focus:text-gray-500 focus:outline-noe focus:border-gray-200" required placeholder='품목 코드를 입력해주세요.' type='text'
                           name='itemCode' value={form.itemCode} onChange={handleChange} />
                </label>
                <label htmlFor="item" className="w-full flex-1 mx-2 text-xs font-semibold text-gray-600 uppercase">품목
                    <input className="w-full py-3 px-1 mt-1 text-gray-800 appearance-none border-2 border-gray-100
                    focus:text-gray-500 focus:outline-noe focus:border-gray-200" required placeholder='품목을 입력해주세요.' type='text'
                           name='item' value={form.item} onChange={handleChange} />
                </label>
                <label htmlFor="itemNo" className="w-full flex-1 mx-2 text-xs font-semibold text-gray-600 uppercase">품목 유형
                    <input className="w-full py-3 px-1 mt-1 text-gray-800 appearance-none border-2 border-gray-100
                    focus:text-gray-500 focus:outline-noe focus:border-gray-200" required placeholder='품목 유형을 입력해주세요.' type='text'
                           name='itemNo' value={form.itemNo} onChange={handleChange} />
                </label>
                <label htmlFor="itemGroup" className="w-full flex-1 mx-2 text-xs font-semibold text-gray-600 uppercase">품목군
                    <input className="w-full py-3 px-1 mt-1 text-gray-800 appearance-none border-2 border-gray-100
                    focus:text-gray-500 focus:outline-noe focus:border-gray-200" required placeholder='품목군을 입력해주세요.' type='text'
                           name='itemGroup' value={form.itemGroup} onChange={handleChange} />
                </label>
            </div>
            <div className='text-center'>
                <button className='bg-blue-400 py-2 text-center px-10 md:px-12 md:py-3 text-white
                rounded text-xl md:text-base mt-4' type='submit'>저장</button>
            </div>
        </form>
        </>
    );
};

export default Post;