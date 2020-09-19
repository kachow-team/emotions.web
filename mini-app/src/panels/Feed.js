import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import persik from '../img/persik.png';
import './Feed.css';

const osName = platform();

const Feed = props => {
    const thematic = props.thematic;
    return (
	    <Panel id={props.id}>
	    	<PanelHeader
	    		left={<PanelHeaderButton onClick={props.go} data-to="home">
	    			{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
	    		</PanelHeaderButton>}
	    	>
	    		Persik {thematic}
	    	</PanelHeader>
	    	<img className="Persik" src={persik} alt="Persik The Cat"/>
            <img className="Persik" src={persik} alt="Persik The Cat"/>
	    </Panel>
    );
}

Feed.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Feed;
