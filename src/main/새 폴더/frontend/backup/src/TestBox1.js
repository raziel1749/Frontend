import $ from 'jquery';
import 'datatables.net-dt';
import 'datatables.net-responsive-dt';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import 'datatables.net-responsive-dt/css/responsive.dataTables.min.css';
import { useEffect, useRef } from 'react';
// imports Module not found: Error: Can't resolve './data/datatables
// import { number, decimal, percent } from './utils/numberFormat'; 필요한 경우
// https://onlydev.tistory.com/157

export default function DataTable() {
  const tableRef = useRef();

  useEffect(() => {
    const table = $(tableRef.current).DataTable({
      ajax: {
        type: 'GET',
        url: 'api/objects.json',
        dataType: 'json',
      },
      columns: [
        { data: 'name', title: 'Name' },
        { data: 'position', title: 'Position' },
        { data: 'office', title: 'Office' },
        { data: 'extn', title: 'Extn.' },
        { data: 'startDate', title: 'Start date' },
        { data: 'salary', title: 'Salary' },
      ],
      responsive: true, // 반응형 켜기
      scrollX: true,
    });

    // 언마운트 시 destroy
    return () => {
      table.destroy();
    };
  }, []);

  return (
    <table
      ref={tableRef}
      className='table stripe row-border order-column table-striped cell-border'
      style={{ width: '100%' }}></table>
  );
}