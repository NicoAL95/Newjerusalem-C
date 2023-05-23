import Image from "next/image"
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from "react";
import moment from 'moment/moment';
import {
    FacebookShareButton,
    WhatsappShareButton,
  } from "react-share";
import { RWebShare } from 'react-web-share';
import devotion from "../../../pages/devotion";

export default function ContentDaily({ detailDev }) {
    const [urLink, setUrl] = useState("");
    useEffect(() => {
        const cu = window.location.href;
        setUrl(cu);
    }, []);
    
  return (
    <section className='dailyHighlight'>
        <div className='devHighFlex'>
            <div className='devDetLeft'>
                <div className='devTitle'>
                    <h1>Daily Devotion</h1>
                </div>
                <div className='devDate'>
                    <h1>{moment( detailDev.datePublished ).format('LL')}</h1>
                </div>
            </div>
            <div className='devIcons'>
                <FacebookShareButton url={urLink} className='w-fit'>
                    <div className="iconFlex">
                        <Image src='/libraries/img/icons/share/facebook.svg' objectFit="contain" layout="fill" alt=""/>
                    </div>
                </FacebookShareButton>
                <WhatsappShareButton url={urLink} className='w-fit'>
                    <div className="iconFlex">
                        <Image src='/libraries/img/icons/share/whatsapp.svg' objectFit="contain" layout="fill" alt=""/>
                    </div>
                </WhatsappShareButton>
                <RWebShare data={{}}
                >
                    <button className='w-fit'>
                        <div className="iconFlex">
                            <Image src='/libraries/img/icons/share/share.svg' objectFit="contain" layout="fill" alt=""/>
                        </div>
                    </button>
                </RWebShare>
            </div>
        </div>
            <div className='devHighTitle'>
                <h1>{ detailDev.title }</h1>
            </div>
        <div className='devHighCont'>
            <ReactMarkdown 
                // eslint-disable-next-line react/no-children-prop
                children={detailDev.content}
                components={{
                    p: ({ children }) => <p className='devPar'>{children}</p>,
                    strong: ({ children }) => <span className='futBold'>{children}</span>
                }}
            />
        </div>
    </section>
  )
}

