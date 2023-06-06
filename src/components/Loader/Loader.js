import { ThreeDots } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';


export const Loader = () => {
    return (<LoaderContainer>
       <ThreeDots 
height="55" 
width="55" 
radius="9"
color="black" 
ariaLabel="three-dots-loading"
            visible={true}
             wrapperStyle={{
          bottom: 0,
    height: 60,
    left: 0,
    margin: 'auto',
    position: 'absolute',
    right: 0,
    top: 0,
    width: 100,
        }}
        />
        </LoaderContainer>
    )
};