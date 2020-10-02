import React from 'react';
import trash from '../../img/trash.png';
import empty from '../../img/empty.png';

const CartLoading = (props) => {

    const EmptyCarts = () => {
        let emptyCarts = [];
        for (let i = 0; i < 5; i++) {
            emptyCarts.push(<div key={i} className={'cart'}>
                <div className={"block"}>
                    <div className={"item"}>
                        <img className={'item-img'} src={empty} alt={''} />
                        <div className={'item-info'}>
                            <div className={"title"}>
                                <p>Некий товар</p>
                            </div>
                            <div className={"description"}>
                                <p>И его некое описание</p>
                            </div>
                        </div>
                    </div>
                    <div className={"change"}>
                        <button className={"button"}>+</button>
                        <input className={'value'} tabIndex="-1" />
                        <button className={"button"} >-</button>
                        <p className={"price"}>{0
                            + ' '
                            + '€'}</p>
                    </div>
                    <div className={"delete"}>
                        <button >
                            <img src={trash} alt={''}/>
                        </button>
                    </div>
                </div>
                <hr />
            </div>)
        }
        return emptyCarts;
    }

    return (
        <div>
            {EmptyCarts()}
        </div>
    )
}

export default CartLoading;