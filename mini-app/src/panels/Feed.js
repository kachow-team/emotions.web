import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS, FixedLayout } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import persik from '../img/persik.png';
import './Feed.css';

import FeedPanel from '../img/FeedPanel.svg';
import postHeader from '../img/postHeader.svg';
import commentpanel from '../img/commentpanel.svg'

const osName = platform();

const posts = [
    {thematic: 'Автомобили', userName: 'Иван Иванов', post: 'Что-то про автомобили'},
    {thematic: 'Автомобили', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Автомобили', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Автомобили', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Автомобили', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Автомобили', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Автомобили', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Аренда автомобилей', userName: 'Иван Иванов', post: 'Что-то про аренду'},
    {thematic: 'Аренда автомобилей', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Аренда автомобилей', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Аренда автомобилей', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Аренда автомобилей', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Аренда автомобилей', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Аренда автомобилей', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Автотовары', userName: 'Иван Иванов', post: 'Что-то про автотовары'},
    {thematic: 'Автотовары', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Автотовары', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Автотовары', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Автотовары', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Автотовары', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Автотовары', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Автосалон', userName: 'Иван Иванов', post: 'Что-то про автосалон'},
    {thematic: 'Автосалон', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Автосалон', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Автосалон', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Автосалон', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Автосалон', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Автосервис', userName: 'Иван Иванов', post: 'Что-то про автосервис'},
    {thematic: 'Автосервис', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Автосервис', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Автосервис', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Автосервис', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Автосервис', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Услуги для автовладельцев', userName: 'Иван Иванов', post: 'Что-то про услуги'},
    {thematic: 'Услуги для автовладельцев', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Услуги для автовладельцев', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Услуги для автовладельцев', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Услуги для автовладельцев', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Услуги для автовладельцев', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Велосипеды', userName: 'Иван Иванов', post: 'Что-то про велосипеды'},
    {thematic: 'Велосипеды', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Велосипеды', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Велосипеды', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Велосипеды', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Велосипеды', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Мотоциклы и другая мототехника', userName: 'Иван Иванов', post: 'Что-то про мотоциклы'},
    {thematic: 'Мотоциклы и другая мототехника', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Мотоциклы и другая мототехника', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Мотоциклы и другая мототехника', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Мотоциклы и другая мототехника', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Мотоциклы и другая мототехника', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Водный транспорт', userName: 'Иван Иванов', post: 'Что-то про транспорт'},
    {thematic: 'Водный транспорт', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Водный транспорт', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Водный транспорт', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Водный транспорт', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Водный транспорт', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Автопроизводитель', userName: 'Иван Иванов', post: 'Что-то про автопроизводителей'},
    {thematic: 'Автопроизводитель', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Автопроизводитель', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Автопроизводитель', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Автопроизводитель', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Автопроизводитель', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Автомойка', userName: 'Иван Иванов', post: 'Что-то про автомойки'},
    {thematic: 'Автомойка', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Автомойка', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Автомойка', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Автомойка', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Автомойка', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Автошкола', userName: 'Иван Иванов', post: 'Что-то про автошколы'},
    {thematic: 'Автошкола', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Автошкола', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Автошкола', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Автошкола', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Автошкола', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Детский сад', userName: 'Иван Иванов', post: 'Что-то про детский сад'},
    {thematic: 'Детский сад', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Детский сад', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Детский сад', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Детский сад', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Детский сад', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Гимназия', userName: 'Иван Иванов', post: 'Что-то про гимназии'},
    {thematic: 'Гимназия', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Гимназия', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Гимназия', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Гимназия', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Гимназия', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Колледж', userName: 'Иван Иванов', post: 'Что-то про колледж'},
    {thematic: 'Колледж', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Колледж', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Колледж', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Колледж', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Колледж', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Лицей', userName: 'Иван Иванов', post: 'Что-то про лицей'},
    {thematic: 'Лицей', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Лицей', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Лицей', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Лицей', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Лицей', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Техникум', userName: 'Иван Иванов', post: 'Что-то про техникум'},
    {thematic: 'Техникум', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Техникум', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Техникум', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Техникум', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Техникум', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Университет', userName: 'Иван Иванов', post: 'Что-то про университет'},
    {thematic: 'Университет', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Университет', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Университет', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Университет', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Университет', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Школа', userName: 'Иван Иванов', post: 'Что-то про школу'},
    {thematic: 'Школа', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Школа', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Школа', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Школа', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Школа', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Школа', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Институт', userName: 'Иван Иванов', post: 'Что-то про институт'},
    {thematic: 'Институт', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Институт', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Институт', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Институт', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Институт', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Обучающие курсы', userName: 'Иван Иванов', post: 'Что-то про обучающие курсы'},
    {thematic: 'Обучающие курсы', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Обучающие курсы', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Обучающие курсы', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Обучающие курсы', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Обучающие курсы', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Дополнительное образование', userName: 'Иван Иванов', post: 'Что-то про образование'},
    {thematic: 'Дополнительное образование', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Дополнительное образование', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Дополнительное образование', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Дополнительное образование', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Дополнительное образование', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Тренинг, семинар', userName: 'Иван Иванов', post: 'Какие-то тренинги'},
    {thematic: 'Тренинг, семинар', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Тренинг, семинар', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Тренинг, семинар', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Тренинг, семинар', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Тренинг, семинар', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Танцевальная школа', userName: 'Иван Иванов', post: 'Танцевальные школы открылись'},
    {thematic: 'Танцевальная школа', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Танцевальная школа', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Танцевальная школа', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Танцевальная школа', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Танцевальная школа', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Музыка', userName: 'Иван Иванов', post: 'Слушаем музыку'},
    {thematic: 'Музыка', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Музыка', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Музыка', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Музыка', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Музыка', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Фильмы', userName: 'Иван Иванов', post: 'Смотрим фильмы'},
    {thematic: 'Фильмы', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Фильмы', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Фильмы', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Фильмы', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Фильмы', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Осень', userName: 'Иван Иванов', post: 'Третье сентября'},
    {thematic: 'Осень', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Осень', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Осень', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Осень', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Осень', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Работа', userName: 'Иван Иванов', post: 'Работаем'},
    {thematic: 'Работа', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Работа', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Работа', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Работа', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Работа', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Карантин', userName: 'Иван Иванов', post: 'Кхе-кхе'},
    {thematic: 'Карантин', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Карантин', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Карантин', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Карантин', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Карантин', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Карантин', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'IT', userName: 'Иван Иванов', post: 'Ctrl Alt Del'},
    {thematic: 'IT', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'IT', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'IT', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'IT', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'IT', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Авто', userName: 'Иван Иванов', post: 'Врум врум'},
    {thematic: 'Авто', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Авто', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Авто', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Авто', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Авто', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Игры', userName: 'Иван Иванов', post: 'Хэдшот'},
    {thematic: 'Игры', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Игры', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Игры', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Игры', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Игры', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Искусство', userName: 'Иван Иванов', post: 'Million dollars'},
    {thematic: 'Искусство', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Искусство', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Искусство', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Искусство', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Искусство', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Юмор', userName: 'Иван Иванов', post: 'Рыбка утонула'},
    {thematic: 'Юмор', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Юмор', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Юмор', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Юмор', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Юмор', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Фотографии', userName: 'Иван Иванов', post: 'Улыбочку'},
    {thematic: 'Фотографии', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Фотографии', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Фотографии', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Фотографии', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Фотографии', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
    {thematic: 'Фотографии', userName: 'Иван Иванов', post: 'Крот овце, жирафу, зайке голубые сшил фуфайки. Каждый охотник желает знать, где сидит фазан.'},
];

const Post = ({post}) => (
    <div style={{marginTop: 10, borderTop: "5px solid #ECEDF1"}}>
        <img width="100%" src={postHeader} />
        <div width="100%" style={{marginTop: 10, marginLeft: 12}}>{post}</div>
        <img width="100%" src={commentpanel} />
    </div>
);

const Feed = props => {
    return (
	    <Panel id={props.id}>
	    	<PanelHeader
	    		left={<PanelHeaderButton onClick={props.go} data-to="home">
	    			{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
	    		</PanelHeaderButton>}
	    	>
	    		{props.thematic}
	    	</PanelHeader>
            {posts.filter(({thematic}) => thematic.toLowerCase() == props.thematic.toLowerCase()).map(post => (
                <Post post={post.post} />
            ))}
	    </Panel>
    );
}

Feed.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Feed;
