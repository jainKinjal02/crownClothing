//import './directory-item.styles.jsx';

import { BackgroundImage , Body, DirectoryItemContainer} from './directory-item.styles';

const DirectoryItem = ({category})=>{
    return (
        <DirectoryItemContainer>
        <BackgroundImage  
             imageUrl={category.imageUrl}
             />
        <Body>
          <h2>{category.title}</h2>
          <p>Shop Now</p>
        </Body>
      </DirectoryItemContainer> 
    )
}

export default DirectoryItem;