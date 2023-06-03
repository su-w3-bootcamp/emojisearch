import Emoji from '../Emoji/Emoji.js';
import emojis from '../../data/emojiList.js';

function EmojiList(props) {

    const searchValue = props.search;

    const newList = emojis.filter((emoji) => {
        return emoji.keywords.includes(searchValue);
    });

    return(
        <>
            {newList.map((emoji) => <Emoji key={emoji.title} icon={emoji.symbol} name={emoji.title} />)}
        </>
    );
}

export default EmojiList;