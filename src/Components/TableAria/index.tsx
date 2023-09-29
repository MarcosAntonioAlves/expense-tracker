import * as C from './style'
import {Item} from '../../types/Item';
import {TableItem} from '../TableItem';

type Props = {
    list: Item[]
}

export const TableAria = ({list}: Props) =>{
    return(
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColumn width={100}>Date</C.TableHeadColumn>
                    <C.TableHeadColumn width={130}>category</C.TableHeadColumn>
                    <C.TableHeadColumn>title</C.TableHeadColumn>
                    <C.TableHeadColumn width={150}>value</C.TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index)=>(
                    <TableItem key={index} item={item}/>               
                ))}
            </tbody>
        </C.Table>
    );
}