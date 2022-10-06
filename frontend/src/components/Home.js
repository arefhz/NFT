import React, {useEffect} from 'react';
import {styles} from './Home.scss';
import {BsPersonBoundingBox, BsInstagram, BsTwitter, BsPersonSquare} from 'react-icons/bs';
import {AiOutlineReddit, AiFillInstagram, AiOutlineInfoCircle, AiFillMail} from 'react-icons/ai';
import {ImYoutube2} from 'react-icons/im';
import {FaTelegramPlane, FaLinkedinIn, FaMapMarkerAlt, FaGooglePlusG, FaHome, FaPhone, FaMapMarkedAlt} from 'react-icons/fa';
import {Link} from '@mui/material';

let banner_url1 = require('../static/images/Gl1-21x.webm')['default'];
let circle_url = require('../static/images/Circle.mp4')['default'];
//let circle_url = require('../static/images/Circle.webm')['default'];
let banner_url3 = require('../static/images/Gl3-21(1).webm')['default'];
let banner_url4 = require('../static/images/Gl3-X21.webm')['default'];
let banner_url2 = require('../static/images/Baner_i.png')['default'];
let tissue_url1 = require('../static/images/Mesh.webm')['default'];
let fire_url = require('../static/images/PeVatrons.jpg')['default'];
let mid_banner = require('../static/images/Galaxy.jpg')['default'];
let coll_url1 = require('../static/images/n_9final_touches_preview@2x.png')['default'];
let coll_url2 = require('../static/images/n_0_ready_to_render@2x.png')['default'];
let coll_url3 = require('../static/images/Renata@2x.png')['default'];
let bottBanner_url = require('../static/images/Baner2.jpg')['default'];
let bottBanner_url2 = require('../static/images/Antoan.png')['default'];
let galaxy_url = require('../static/images/Galaxy_X7.png')['default'];

let line_url1 = require('../static/images/Khat.png')['default'];
let line_url2 = require('../static/images/Khat2.png')['default'];
let line_url3 = require('../static/images/Khat3.png')['default'];

let fire_url2 = require('../static/images/fire_1.png')['default'];
let eth_logo = require('../static/images/ethereum-eth-logo.png')['default'];


function NavigationBar(props){
    return(
        <div className="navigation">
            <div className="firstItem">
                <img src={logo_url} />
                <div>
                    BMVerse
                </div>
            </div>
            <div className="secondItem">
                Rare product<br />
                <span>NFTs</span>
            </div>
            <div className="thirdItem">
                Rare concept<br />
                <span>NFTs</span>
            </div>
            <div className="fourthItem">
                Rare ordinary<br />
                <span>NFTs</span>
            </div>
            <div className="button">
                <div></div>
                Connect wallet
            </div>
        </div>
    )
}

let logo_url = require('../static/images/icon.png')['default'];
function Card(props){
    let im_url=require('../static/images/'+props.picURL)['default'];
    return(
        <div className="card">
            <div className="picture">
                <img src={im_url} />
            </div>
            <div className="captionPar">
                <div className="type">
                    Rare product
                </div>
                <div className="data">
                    BMjewelry
                </div>
                <div className="line">
                </div>
                <div className="logoPar">
                    <div className="logo">
                        <img src={logo_url} />
                    </div>
                    <div className="logoName">
                        BMverse
                    </div>
                </div>
            </div>
        </div>
    )
}

function TrendingCard(props){
    let img_url = require('../static/images/'+props.picURL)['default'];
    return(
        <div className="trendingCard">
            <div className="body">
                <img src={img_url} />
                <div className="dataPar">
                    <div className="data">
                        <div className="dataChild">
                            <div className="top">
                                <div className="left">
                                    <div className="name"> {props.name} </div>
                                    <div className="type"> "Antverse" </div>
                                    <div className="collection"> Mega Collection </div>
                                </div>
                                <div className="right">
                                    <div>Price</div>
                                    <div className="value">{props.price}<span className="ethLogo"><img src={eth_logo} /></span></div>
                                    <div>Last</div>
                                    <div className="value">{props.last}<span className="ethLogo"><img src={eth_logo} /></span></div>
                                </div>
                            </div>
                            <div className="bottom">
                                <div><span>Development Capability:</span> Advanced</div>
                                <div><span>Category:</span> Game Character <span className="logo"><img src={logo_url} /></span><span className="logoName">BMverse</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

let back_url = require('../static/images/Flare-1.jpg')['default'];
let back_url2 = require('../static/images/Intro_1.webm')['default'];
let back_url3 = require('../static/images/Back2.jpg')['default'];

function HomePage(props){
    useEffect(() => {
        let headers = {};
        document.getElementById('bannerVideo').play();
        document.getElementById('subBannerVideo').play();
        document.getElementById('tissueVideo').play();
        document.getElementById('tissueVideo2').play();
        document.getElementById('video1').play();
        document.getElementById('video2').play();
        document.getElementById('video3').play();
        document.getElementById('video4').play();
        document.getElementById('video5').play();
        //document.getElementById('backVideo').play();
    }, [])
    return(
        <div className="home">
            <NavigationBar />
            {/*<div class="backgroundm1">
                <video id="backVideo" preload="auto" loop muted="muted" width="100%">
                    <source src={back_url2} type="video/webm" />
                </video>
            </div>*/}
            <div className="header">
                <video id="bannerVideo" preload="auto" loop muted="muted" width="100%">
                    <source src={banner_url1} type="video/webm" />
                </video>
                <div className="bannerPar">
                    <div className="banner">
                        <img src={banner_url2} />
                    </div>
                </div>
                <div className="dataPar">
                    <div className="caption">
                        <span>NFT</span> marketplace
                    </div>
                    <div className="text">
                        The most different NFTs in history are right here in <span>Mega</span> Collection.
                    </div>
                    <div className="buttonPar">
                        <div className="button1"> Create </div>
                        <div className="button2"> Bazaar Tropism </div>
                    </div>
                </div>
            </div>
            <div className="subHeader">
                <video id="subBannerVideo" preload="auto" loop muted="muted" width="100%">
                    <source src={circle_url} type="video/webm" />
                    Sorry, your browser doesn't support videos.
                </video>
                <div className="dataPar">
                    <div className="caption">
                        The <span>B</span>eautiful <span>M</span>inds
                    </div>
                    <div className="text">
                        <span>Wealth</span> and infinity excitement
                    </div>
                </div>
                <div className="cardsPar">
                    <div className="card">
                        <div className="caption">
                            Development Capability Passive Income
                        </div>
                        <div className="text">
                            Everything is ready for any game development team here. Amazing stories,game characters, and many exciting in-game items are all prepared for any professional video game ...
                        </div>
                        <div className="more">
                            More
                        </div>
                    </div>
                    <div className="card">
                        <div className="caption">
                        Discover unique Senses
                        </div>
                        <div className="text">
                            Relying on the data obtained from the analysis of the frequencies produced and received by the brain, we realized that it is possible to provide gamers with the most realistic sense of a virtual world ...
                        </div>
                        <div className="more">
                            More
                        </div>
                    </div>
                    <div className="card">
                        <div className="caption">
                            safe investment definite profits
                        </div>
                        <div className="text">
                            A great opportunity for the NFT and crypto community. You can be the first to buy the BMVerse mega collection. The mega collection actually consists of 50 collections, ...
                        </div>
                        <div className="more">
                            More
                        </div>
                    </div>
                </div>
            </div>
            <div className="bodyCaption">
                <div className="background">
                    <img src={back_url} />
                </div>
                <div className="cap1">
                    Applying science and laws of nature to realize imaginations
                </div>
                <div className="cap2">
                    Trending in <span>all categories</span>
                </div>
            </div>
            <div className="trendingCardsPar">
                <div className="trendingCardsScroller">
                    <TrendingCard picURL='Image2.png' name='Anton Antstein' price="2.5" last="7.0" />
                    <TrendingCard picURL='Image.png' name='Bloom' price="2.5" last="4.5" />
                    <TrendingCard picURL='AntonAntstein2.png' name='Triston' price="2.5" last="6.0" />
                    <TrendingCard picURL='AntonAntstein+.png' name="Daya'ala" price="2.5" last="11.0" />
                    <TrendingCard picURL='Image4.png' name="Dignity Ring" price="99.0" last="69.0" />
                    <TrendingCard picURL='Image3.png' name="The Wolf Ring" price="7.0" last="11.0" />
                </div>
                <div className="rightMask"></div>
            </div>
            <div className="captionHead2">
                <div className="longLine">
                </div>
                <div className="mainTitle">
                    <div className="head">
                        Bazaar Tropism   
                    </div>
                    <div className="title">
                        last 24 hours
                    </div>
                </div>
                <div className="secondTitle">
                    Projects
                </div>
                <div className="shortLine">
                </div>
            </div>
            <div className="tropismCardsPar">
                <div className="cards">
                    <Card picURL='AntonAntstein+.png' />
                    <Card picURL='Image4.png' />
                    <Card picURL='AntonAntstein2.png' />
                    <Card picURL='Image3.png' />
                    <Card picURL='Image6.png' />
                    <Card picURL='Image7.png' />
                    <Card picURL='Image8.png' />
                    <Card picURL='Image9.png' />
                </div>
                <div className="rightMask"></div>
            </div>
            <div className="rareTissuePar">
                <div className="caption">
                    You are a Rare find, a friend like you is one of a kind
                </div>
                <div className="vid">
                    <video id="tissueVideo" preload="auto" loop muted="muted" width="100%">
                        <source src={tissue_url1} type="video/webm" />
                    </video>
                </div>
            </div>
            <div className="BMGalaxyPar">
                <div className="body">
                    <div className="caption">
                        <span>BM</span>Glaxy
                    </div>
                    <div className="subCaption">
                        The <span>N</span>ext-<span>G</span>eneration of Metaverse Games
                    </div>
                    <div className="videoPar">
                        <div className="vid">
                            <video id="video1" preload="auto" loop muted="muted" width="100%">
                                <source src={banner_url1} type="video/webm" />
                            </video>
                        </div>
                        <div className="vid">
                            <video id="video2" preload="auto" loop muted="muted" width="100%" height="60vh">
                                <source src={banner_url3} type="video/webm" />
                            </video>
                        </div>
                        <div className="vid">
                            <video id="video3" preload="auto" loop muted="muted" width="100%">
                                <source src={banner_url4} type="video/webm" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
            <div className="middleBanner">
                {/*<div className="background">
                    <img src={back_url3} />
                </div>*/}
                <div className="banner">
                    <img src={galaxy_url} />
                </div>
                <div className="mesh">
                    <video id="tissueVideo2" preload="auto" loop muted="muted" width="100%">
                        <source src={tissue_url1} type="video/webm" />
                    </video>
                </div>
                <div className="galaxy1">
                    <video id="video4" preload="auto" loop muted="muted" width="100%">
                        <source src={banner_url1} type="video/webm" />
                    </video>
                </div>
                <div className="line1">
                    <img src={line_url1} />
                </div>
                <div className="line2">
                    <img src={line_url2} />
                </div>
                <div className="line3">
                    <img src={line_url3} />
                </div>
                <div className="galaxyData1">
                    <div className="data">
                        The Galaxies on which <span>BMgalaxy</span> is defined can be considered as a living thing,
                        similar to the nature in which we live. 
                        These galaxies, which were created 30 years ago without any concept design,
                        were created by millions of dots, each of which was the result of a particular
                        vibration in the brain of the designer artist.
                    </div>
                </div>
                <div className="galaxy2">
                    <video id="video5" preload="auto" loop muted="muted" width="100%">
                        <source src={banner_url3} type="video/webm" />
                    </video>
                </div>
                <div className="galaxyData2">
                    <div className="data">
                        <span>Wealth</span> is in our mind, and only creativity and excitement will make it real.
                    </div>
                </div>
                <div className="galaxyData3">
                    <div className="data">
                        Creativity provides ways that few have gone; <span>BMverse</span> is with you on this exciting journey.
                    </div>
                </div>
            </div>
            <div className="fireDiv">
                <div className="background">
                    <img src={back_url} />
                </div>
                <div className="caption">
                    <div className="cap1">
                        <span>CREATE</span> THE MOST <span>MARVELOUS</span> WORLD YOU CAN THINK OF
                    </div>
                    <div className="cap2">
                        THE <span>GODDESSES</span> BELIEVE IN YOU
                    </div>
                </div>
                <div className="data1">
                    <div className="text">
                        Relying on the data obtained from the analysis of the frequencies produced
                        and received by the brain, we realized that it is possible to provide gamers
                        with the most realistic sense of a virtual world by analyzing and regulating
                        these vibrations and establishing communication between the parts
                        of the brain that are more active in creativity and mental imagery with
                        a super-intelligent core of Metaverse-based games. Using particle systems,
                        simulators developed in artificial intelligence, and machine learning, we
                        created a unique interaction between the human brain waves, brain galactic
                        frequency reception, and creator algorithms.
                        This interaction, which as a matter of fact includes the emotions, thoughts,
                        and creativity between the player and the super-intelligent core of our
                        metaverse game, makes connections between the player's brain neurons.
                    </div>
                </div>
                <div className="banner">
                    <img src={fire_url2} />
                </div>
                <div className="data2">
                    <div className="cap1">
                        PeVatrons
                    </div>
                    <div className="cap2">
                        Endless Source of Galactic Energies
                    </div>
                    <div className="cap3">
                        Decentralized Game Engine based machine learning
                    </div>
                    <div className="cap4">
                        ENDLESS POSSIBILITIES!
                    </div>
                    <div className="cap5">
                        When Machine Learning and Ohysics Collide
                    </div>
                    <div className="cap6">
                        <span>You</span> are not Alone
                    </div>
                    <div className="cap7">
                        The <span>Goddesses</span> are hereon
                    </div>
                </div>
            </div>
            <div className="megaCollections">
                <div className="caption">
                    <div className="cap1">
                        <span>BM</span>verse
                    </div>
                    <div className="cap2">
                        <span>MEGA</span> COLLECTIONS
                    </div>
                </div>
                <div className="collection">
                    <div className="picture">
                        <img src={coll_url1} />
                    </div>
                    <div className="data">
                        Mega Collection is the most specialized and comprehensive
                        NFT collection in the field of video game characters.
                        This collection consists of 50 unique collections,
                        each of which contains 12 unique characters with
                        a fascinating and astonishing story.
                    </div>
                </div>
                <div className="bottomLine"></div>
                <div className="collection2">
                    <div className="picture">
                        <img src={coll_url2} />
                    </div>
                    <div className="data">
                        <div className="caption">
                            <span>ANT</span>VERSE
                        </div>
                        <div className="subCaption">
                            First <span>one</span> from fifty collections
                        </div>
                        <div className="button">
                            Buy Now
                        </div>
                    </div>
                </div>
                <div className="collection3">
                    <div className="picture">
                        <img src={coll_url3} />
                    </div>
                    <div className="data">
                        Finally, each collection contains a work called
                        The Last Supper,
                        in which all 12 characters of the collection
                        are cryptically talking to each other around a table
                        in a certain standing position and form,
                    </div>
                    <div className="exData">
                        <div className="captionPar">
                            <div className="caption">
                                Each of which conveys an important <span>message</span>
                            </div>
                        </div>
                        <div className="button">
                            Buy Now
                        </div>
                    </div>
                </div>
                <div className="bottomPar">
                    <div className="data">
                        In the Mega Collection, the bridge is made from imagination to reality,
                        and this feature is realizable right where the unique ability 
                        and feature that each character has,
                        is made in the real world in the form of a hashed jewel,
                        and its NFT is tradable in the Mega Collection.
                    </div>
                    <div className="banner">
                        <img src={bottBanner_url} />
                    </div>
                    <div className="banner2">
                        <img src={bottBanner_url2} />
                    </div>
                </div>
            </div>
            <div className="upFooter">
                <FooterCol ind="0" />
                <FooterCol ind="1" />
                <FooterCol ind="2" />
                <FooterCol ind="3" />
            </div>
            <div className="footerPar">
                <div className="footer">
                    <div className="upperPar">
                        <div className="caption">
                            Be Tuned in <span>BM</span>verse
                        </div>
                        <div className="subCaption">
                            Enter your email, get more information and be informed of the latest events
                        </div>
                        <div className="inpPar">
                            <input placeholder="Your Email Address" />
                            <div className="button">
                                sign up
                            </div>
                        </div>
                    </div>
                    <div className="bottomPar">
                        <div className="left">
                            <div className="logo">
                                <img src={logo_url} />
                            </div>
                            <div className="logoName">
                                <span>BM</span>verse
                            </div>
                            <div className="text">
                                The world's first digital asset marketplace for crypto collectibles,
                                fungble and non-fungible token(NFTs), bringing together
                                developers, freelancers and business owners and creating
                                real value by using virtual facilities to provide the partnership
                                infrastructure.
                            </div>
                        </div>
                        <div className="right">
                            <div className="linksCol">
                                <div className="cap"> Marketplace </div>
                                <div className=""> All NFTs </div>
                                <div className=""> Solana NFTs </div>
                                <div className=""> Art </div>
                                <div className=""> Collectibles </div>
                                <div className=""> Domain Names </div>
                                <div className=""> Music </div>
                                <div className=""> Photography </div>
                                <div className=""> Sports </div>
                                <div className=""> Trading Cards </div>
                                <div className=""> Utility </div>
                                <div className=""> Virtual Worlds </div>
                            </div>
                            <div className="linksCol">
                                <div className="cap"> My Account </div>
                                <div className=""> Profile </div>
                                <div className=""> Favorites </div>
                                <div className=""> Whatchlist </div>
                                <div className=""> My Collections </div>
                                <div className=""> Settings </div>
                                <div className="cap"> State </div>
                                <div className=""> Rankings </div>
                                <div className=""> Activity </div>
                            </div>
                            <div className="linksCol">
                                <div className="cap"> BMchains </div>
                                <div className=""> All NFTs </div>
                                <div className=""> Solana NFTs </div>
                                <div className=""> Art </div>
                                <div className=""> Collectibles </div>
                                <div className=""> Domain Names </div>
                                <div className=""> Music </div>
                                <div className=""> Photography </div>
                                <div className=""> Sports </div>
                                <div className=""> Trading Cards </div>
                                <div className=""> Utility </div>
                                <div className=""> Virtual Worlds </div>
                            </div>
                        </div>
                    </div>
                    <div className="linksPar">
                        <div className="caption">
                            Join the community
                        </div>
                        <div className="links">
                            <div className="link">
                                <Link href="https://twitter.com/bmverseio" target="_blank"><BsTwitter size={20} color={IconColor2} /></Link>
                            </div>
                            <div className="link">
                                <AiFillInstagram size={20} color={IconColor2} />
                            </div>
                            <div className="link">
                                <FaLinkedinIn size={20} color={IconColor2} />
                            </div>
                            <div className="link">
                                <AiOutlineReddit size={20} color={IconColor2} />
                            </div>
                            <div className="link">
                                <ImYoutube2 size={20} color={IconColor2} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
let IconColor2 = '#fff';

function FooterCol(props){
    let caps = [['Rare concept','NFTs'], ['Rare product','NFTs'], ['Rare ordinary','NFTs'], ['BMchains','About us']];
    let texts = ['Alongside our consultants and in a very safe environment, everybody can realize his/her concept without worrying about the implementation processes. Should be mentioned there is a vc section to invest in top ideas.',
        'The rarest products in the world, providing products for super luxury people. Unique valuable products with no similar version, most of which not only have an ornamental aspect, but offer many uses in the virtual world.',
        'Ordinary NFTs must be compatible with the rarity indicators considered by BMVerse. Every NFT in BMVerse has a series of minimums in terms of quality.',
        'We are the most specialized provider of blockchain-based game infrastructure. All the services and assets provided in this space is tradable in the form of NFT.'
        ];
    let ind = parseInt(props.ind);
    return(
        <div className="footerCardPar">
            <div className="footerCard">
                <div className="caption">{caps[ind][0]}<br />{caps[ind][1]}</div>
                <div className="text">
                    {texts[ind]}
                </div>
            </div>
        </div>
    )
}

export {HomePage};