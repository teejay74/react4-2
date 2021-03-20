import Record from './Record/Record';
import './TrainingList.css';

export default function TrainingList(props) {
    const { records, onDelete } = props;
    const sorted = records.sort((a, b) =>  b.dateFormat - a.dateFormat);
    const onDelHandler = (id) => {
        onDelete(id);
    }

    return(
        <div className="List">        
            <div className="List-Header">
                <span>Дата (ДД.ММ.ГГ)</span>
                <span>Пройдено км</span>
                <span>Действия</span>
            </div>
            <div className="List-Table">
                {sorted.map(record => <Record key={record.id} data={record} onDel={onDelHandler} />)}             
            </div>
        </div>
    )
}