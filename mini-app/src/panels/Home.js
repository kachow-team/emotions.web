import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

import GoogleMapReact from 'google-map-react';

/*icons*/
import persik from '../img/persik.png';
import car from '../img/car.svg';
import art from '../img/art.svg';
import it from '../img/it.svg';
import karantin from '../img/karantin.svg';

import MusicIcon from '../img/MusicIcon.svg'

import SleepIcon from '../img/sleepIcon.svg'
import SadIcon from '../img/sadIcon.svg'
import TongueIcon from '../img/tongueIcon.svg'
import HappyIcon from '../img/happyIcon.svg'

import HorizontalScroll from "@vkontakte/vkui/dist/components/HorizontalScroll/HorizontalScroll";
import Header from "@vkontakte/vkui/dist/components/Header/Header";
import Search from "@vkontakte/vkui/dist/components/Search/Search";

import './Home.css';

import {
    isMobileSafari
} from "react-device-detect";

// const PictureOnMap = (props) => {
//     return (
//         <img key={props.picId} onClick={props.go} data-to={'persik'} style={{width: '100px', height: '100px'}}
//              className={props.picId} src={props.picId} alt={`emotion-${props.picId}`}/>
//     )
// };

const PictureOnMap = (props) => {
    const onClick = e => {
        props.setThematic(props.thematic);
        props.go(e);
    }
    return (
        <img key={props.picId} onClick={onClick} data-to={'feed'} style={{width: '100px', height: '100px'}}
             className={props.picId} src={props.picId} alt={`emotion-${props.picId}`}/>
    )
};

const itemStyle = {
    flexShrink: 0,
    width: 80,
    height: 94,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: 12
};

const thematics = [
    {id: 3201, name: "Аренда автомобилей"},
    {id: 3273, name: "Автотовары"},
    {id: 3205, name: "Автосалон"},
    {id: 3282, name: "Автосервис"},
    {id: 3283, name: "Услуги для автовладельцев"},
    {id: 3284, name: "Велосипеды"},
    {id: 3285, name: "Мотоциклы и другая мототехника"},
    {id: 3286, name: "Водный транспорт"},
    {id: 3287, name: "Автопроизводитель"},
    {id: 3288, name: "Автомойка"},
    {id: 3117, name: "Автошкола"},
    {id: 3118, name: "Детский сад"},
    {id: 3119, name: "Гимназия"},
    {id: 3120, name: "Колледж"},
    {id: 3121, name: "Лицей"},
    {id: 3122, name: "Техникум"},
    {id: 3123, name: "Университет"},
    {id: 3124, name: "Школа"},
    {id: 3125, name: "Институт"},
    {id: 3126, name: "Обучающие курсы"},
    {id: 3276, name: "Дополнительное образование"},
    {id: 3275, name: "Тренинг, семинар"},
    {id: 3127, name: "Танцевальная школа"}
];

const moods = [
    {name: 'Музыка', icon: MusicIcon},
    {name: 'Фильмы', icon: MusicIcon},
    {name: 'Осень', icon: MusicIcon},
    {name: 'Работа', icon: MusicIcon},
    {name: 'Карантин', icon: MusicIcon},
    {name: 'IT', icon: MusicIcon},
    {name: 'Авто', icon: MusicIcon},
    {name: 'Игры', icon: MusicIcon},
    {name: 'Искусство', icon: MusicIcon},
    {name: 'Юмор', icon: MusicIcon},
    {name: 'Фотографии', icon: MusicIcon},

];


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({search: e.target.value});
    }

    get thematics() {
        const search = this.state.search.toLowerCase();
        return thematics.filter(({name}) => name.toLowerCase().indexOf(search) > -1);
    }

    get moods() {
        const search = this.state.search.toLowerCase();
        return moods.filter(({name}) => name.toLowerCase().indexOf(search) > -1);
    }

    render() {
        return (
            <Panel id={this.props.id}>
                <Group title="Navigation Example">
                    <Div className={'MapWrap'}>
                        <div className={'Map'}>
                            <GoogleMapReact
                                bootstrapURLKeys={{key: 'AIzaSyBfWuWoRpL4rFbuyTrQdN04EuwOxhkZUeY'}}
                                defaultCenter={{
                                    lat: 62.95,
                                    lng: 30.33
                                }}
                                defaultZoom={11}
                            >
                                <PictureOnMap
                                    go={this.props.go}
                                    lat={59.955413}
                                    lng={30.337844}
                                    picId={persik}
                                    thematic='Персик'
                                    setThematic={this.props.setThematic}
                                />
                                <PictureOnMap
                                    go={this.props.go}
                                    lat={62.955413}
                                    lng={30.337844}
                                    picId={car}
                                    thematic='Автомобили'
                                    setThematic={this.props.setThematic}
                                />
                                <PictureOnMap
                                    go={this.props.go}
                                    lat={57.955413}
                                    lng={30.337844}
                                    picId={art}
                                    thematic='Искусство'
                                    setThematic={this.props.setThematic}
                                />
                                <PictureOnMap
                                    go={this.props.go}
                                    lat={55.955413}
                                    lng={20.337844}
                                    picId={it}
                                    thematic='IT'
                                    setThematic={this.props.setThematic}
                                />
                                <PictureOnMap
                                    go={this.props.go}
                                    lat={55.955413}
                                    lng={20.337844}
                                    picId={karantin}
                                    thematic='Карантин'
                                    setThematic={this.props.setThematic}
                                />
                                {/*{moods.map(thematic => (*/}
                                {/*    <div go={this.props.go}*/}
                                {/*         lat={55.955413}*/}
                                {/*         lng={20.337844}*/}
                                {/*         picId={karantin}*/}

                                {/*         style={{...itemStyle, paddingLeft: 4}}>*/}
                                {/*        <Avatar size={64} style={{marginBottom: 8}}>*/}
                                {/*            <img src={thematic.icon}/>*/}
                                {/*        </Avatar>*/}
                                {/*        {thematic.name}*/}
                                {/*    </div>*/}
                                {/*))}*/}
                            </GoogleMapReact>
                            <Avatar
                                className={`Smile Smile_top ${!!this.props.iosMove ? 'Smile_iphone' : 'Smile_iphone'}`}
                                size={35}>
                                <img src={TongueIcon}/>
                            </Avatar>
                            <Avatar className={'Smile Smile_bottom'} size={35}>
                                <img src={SleepIcon}/>
                            </Avatar>
                            <Avatar className={'Smile Smile_right'} size={35}>
                                <img src={HappyIcon}/>
                            </Avatar>
                            <Avatar className={'Smile Smile_left'} size={35}>
                                <img src={SadIcon}/>
                            </Avatar>
                        </div>
                    </Div>
                </Group>
                <Search placeHolder={'Поиск по теме и настроению'} value={this.state.search} onChange={this.onChange}
                        after={null}/>

                <Group style={{paddingBottom: 8}} header={<Header mode="secondary">Недавние</Header>}>
                    <HorizontalScroll>
                        <div style={{display: 'flex'}}>
                            {this.moods.length > 0 &&
                            this.moods.map(thematic =>
                                <div style={{...itemStyle, paddingLeft: 4}}>
                                    <Avatar size={64} style={{marginBottom: 8}}>
                                        <img src={thematic.icon} onClick={(e) => {this.props.setThematic(thematic.name); this.props.go(e);}} data-to={'feed'} />
                                    </Avatar>
                                    {thematic.name}
                                </div>
                            )}
                        </div>
                    </HorizontalScroll>
                </Group>
            </Panel>
        );
    }
}

//todo: paddingleft/right

{/*<List>*/
}
{/*	{this.thematics.map(thematic => <Cell key={thematic.id}>{thematic.name}</Cell>)}*/
}
{/*</List>*/
}

export default Home;
