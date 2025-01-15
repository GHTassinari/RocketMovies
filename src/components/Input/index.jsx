import PropTypes from 'prop-types';

import { Container } from './styles';

export function Input( { icon: Icon, ...rest}){
    return(
        <Container>
            {Icon && <Icon size={20}/>}
            <Input {...rest} />
        </Container>
    );
}

Input.propTypes = {
    icon: PropTypes.elementType, // The icon will be a react element
};