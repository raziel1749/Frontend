import { AgGridReact } from 'ag-grid-react';
import '@ag-grid-community/core/dist/styles/ag-grid.css';
import '@ag-grid-community/core/dist/styles/ag-theme-alpine.css';


const ReactAgGrid = () => {

    const [selectedRows, setSelectedRows] = useState<any>([]);
    const rowsData = [];

    // headerName <- 테이블 헤더에 보여줄 내용
    // filed <- rowData 정보
    // headerCheckboxSelection <- 생성일시 헤더에 체크박스 생성
    // checkboxSelection <- rowData부분에도 체크박스 생성
    // pinned <- pinned: 'left'로 작성하면 좌측으로
    // width <- width값 조정

    const [columnDefs] = useState([
        {headerName: '회사', filed: 'companyName', headerCheckboxSelection: true, checkboxSelection: true },
        {headerName: '품목코드', filed: 'itemCode'},
        {headerName: '품목명', filed: 'item'},
        {headerName: '품목유형', filed: 'itemNo'},
        {headerName: 'P/N', filed: 'pn'},
        {headerName: '품목군', filed: 'itemGroup'},
        {headerName: '규격', filed: 'itemSize'},
        {headerName: '수불단위', filed: 'unit'},
        {headerName: '매입단위', filed: 'purUnit'},
        {headerName: '매입단위수량', filed: 'purCnt'},
        {headerName: '소요단위', filed: 'distUnit'},
        {headerName: '소요단위수량', filed: 'distCnt'},
        {headerName: '수율단위', filed: 'yieldUnit'},
        {headerName: '수율단위수량', filed: 'yieldCnt'}
]);

    const rowData = rowsData && rowsData.map((v: any) => {
        return {
            createdAt: v.createdAt,
            title: v.title,
            content: v.content,
            writer: v.writer
        };
    };

    // onSelectionChanged는 선택한 정보를 가져오기 위해 사용했었던 건데 까먹을까봐 블로그에 작성!!
    const onSelectionChanged = (event: any) => {
        setSelectRowData(event.api.getSelectedRows());
    }

    return (
        <div className="ag-theme-alpine" style={{height: "700px", width: '100%'}}>
            <AgGridReact
                rowData={rowData} // 테이블 데이터
                columnDefs={columnDefs} // 헤더데이터
                animateRows={true} // 행 애니메이션
                suppressRowClickSelection={true} // true -> 클릭 시 행이 선택안됌
                rowSelection={'multiple'} // 여러행 선택
                enableCellTextSelection={true} // 그리드가 일반 테이블인 것처럼 드래그시 일반 텍스트 선택
                onSelectionChanged={onSelectionChanged} // 선택한 체크박스 정보 가져오기
            >
            </AgGridReact>
        </div>
    );
};

export default ReactAgGrid;