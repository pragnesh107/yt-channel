import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
    const imagePath = `${process.env.PUBLIC_URL}/Myimage3.jpg`;
    return (
        <footer>
            <img src={imagePath} alt='profile'></img>
            <h3>404 Not Found!</h3>
            <p>Copyright © 2023 PM Creations</p>
            <ul>
                <li><a href="https://www.instagram.com/pragnesh_mayani_/" target='_blank' rel='noopener noreferrer'><InstagramIcon /></a></li>
                <li><a href='https://www.facebook.com/pragnesh.mayani/' target='_blank' rel='noopener noreferrer'><FacebookIcon /></a></li>
                <li><a href='https://github.com/pragnesh107' target='_blank' rel='noopener noreferrer'><GitHubIcon /></a></li>
            </ul>
        </footer>
    )
}

