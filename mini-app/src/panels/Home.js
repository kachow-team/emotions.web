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
import music from '../img/music.svg';
import cinema from '../img/cinema.svg';
import autumn from '../img/autumn.svg';
import job from '../img/job.svg';
import games from '../img/game.svg';
import humour from '../img/humour.svg';
import photo from '../img/photo.svg';

import AutumnIcon from '../img/bottom/Autumn.svg'
import JobIcon from '../img/bottom/Job.png'
import ArtIcon from '../img/bottom/Art.svg'
import PhotoIcon from '../img/bottom/Photo.svg'
import MoviesIcon from '../img/bottom/Happy.svg'
import CarIcon from '../img/bottom/Car.svg'
import MusicIcon from '../img/bottom/MusicIcon.svg'
import ImprisonedIcon from '../img/bottom/Imprisoned.svg'
import HumorIcon from '../img/bottom/Humor.svg'
import GamesIcon from '../img/bottom/Games.svg'
import ItIcon from '../img/bottom/ITicon.svg'

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

const PictureOnMap = (props) => {
    return (
        <img key={props.picId} onClick={props.go} data-to={'persik'} style={{width: '100px', height: '100px'}}
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

const moods = [
    {
        name: 'Музыка',
        icon: MusicIcon,
        mapIcon: music,
        coord: {lat: 59.45 + Math.random() % 20, lon: 29.33 + Math.random() % 20}
    },
    {
        name: 'Фильмы',
        icon: MoviesIcon,
        mapIcon: cinema,
        coord: {lat: 59.45 + Math.random() % 20, lon: 29.33 + Math.random() % 20}
    },
    {
        name: 'Осень',
        icon: AutumnIcon,
        mapIcon: autumn,
        coord: {lat: 59.45 + Math.random() % 20, lon: 29.33 + Math.random() % 20}
    },
    {
        name: 'Работа',
        icon: JobIcon,
        mapIcon: job,
        coord: {lat: 59.45 + Math.random() % 20, lon: 29.33 + Math.random() % 20}
    },
    {
        name: 'Карантин',
        icon: ImprisonedIcon,
        mapIcon: karantin,
        coord: {lat: 59.45 + Math.random() % 20, lon: 29.33 + Math.random() % 20}
    },
    {name: 'IT', icon: ItIcon, mapIcon: it, coord: {lat: 59.45 + Math.random() % 20, lon: 29.33 + Math.random() % 20}},
    {
        name: 'Авто',
        icon: CarIcon,
        mapIcon: car,
        coord: {lat: 59.45 + Math.random() % 20, lon: 29.33 + Math.random() % 20}
    },
    {
        name: 'Игры',
        icon: GamesIcon,
        mapIcon: games,
        coord: {lat: 59.45 + Math.random() % 20, lon: 29.33 + Math.random() % 20}
    },
    {
        name: 'Искусство',
        icon: ArtIcon,
        mapIcon: art,
        coord: {lat: 59.45 + Math.random() % 20, lon: 29.33 + Math.random() % 20}
    },
    {
        name: 'Юмор',
        icon: HumorIcon,
        mapIcon: humour,
        coord: {lat: 59.45 + Math.random() % 20, lon: 29.33 + Math.random() % 20}
    },
    {
        name: 'Фотографии',
        icon: PhotoIcon,
        mapIcon: photo,
        coord: {lat: 59.45 + Math.random() % 20, lon: 29.33 + Math.random() % 20}
    },

];


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            selectedCategoryBottom: '',
            selectedCategoryMood: '',
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({search: e.target.value});
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
                                    lat: 59.86,
                                    lng: 30.18
                                }}
                                defaultZoom={9}
                            >
                                {this.moods.length > 0 &&
                                this.moods.map(thematic =>
                                    <div
                                        go={this.props.go}
                                        lat={thematic.coord.lat}
                                        lng={thematic.coord.lon}>
                                        <img key={`${thematic.coord.lat}-${thematic.coord.lon}-${thematic.name}`} onClick={this.props.go} data-to={'persik'} style={{width: '100px', height: '100px'}}
                                             src={thematic.mapIcon} alt={`emotion-${thematic.name}`}/>
                                    </div>
                                )}
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
                                        <img src={thematic.icon}/>
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
