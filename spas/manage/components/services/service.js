import numeral from 'numeral';
import React from 'react';
import { Link } from 'react-router';
import { Card, Image, Label } from 'semantic-ui-react';

const styles = {
    card: {
        height: '150px',
        width: '190px',
        borderRadius: 0,
        margin: '1em',
        boxShadow: '0px 0px 3px 0px rgba(175, 175, 175, 0.50)',
        ':hover':{
            cursor: 'default'
        },
        image: {
            width: 'inherit',
            height: '125px'
        }
    }
};


export class Service extends React.Component {

    constructor(props){
        super(props);
    }


    render(){

        const {item: {img, amount, name, fixed, id}} = this.props;

        return (
            <Card 
                as={Link}
                to={`/manage/services/${id}`}
                key="keyForServiceCard" 
                className="Service__Item" 
                style={styles.card}>
                <div className="image" style={styles.card.image}>

                    {/*<!--image ratio is 3:2-->*/}
                    <Image 
                        label={{ style: styles.priceTag, 
                            content: `\u20B5 ${numeral(amount).format('0,0.00')}`, 
                            ribbon: true }}
                        className='Service__Image__And__Amount'
                        src={img}>
                    </Image>

                </div>
                <Label className="Service__Name" attached='bottom'>{name}</Label>

            </Card>
        );
    }
}


export default Service;