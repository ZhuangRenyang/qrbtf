import React from "react";
import '../Qrcode.css';
import LinkTrace from "../link/LinkTrace";

const currentYear = new Date().getFullYear();

const PartFooter = () => (
    <div className="Qr-titled">
        <div className="Qr-Centered Qr-footer note-font">
            <div className="Qr-footer-part">
                <strong>作者</strong>&emsp;
                <LinkTrace
                    href="https://illlli.com"
                    rel="noopener noreferrer"
                    target="_blank">虹色轨迹
                </LinkTrace>
                <span className="gray">&ensp;丨&ensp;</span>
                <span><LinkTrace href="https://dil.illlli.com/privacy" rel="noopener noreferrer"
                                 target="_blank">隐私政策</LinkTrace><span className="gray">&ensp;丨&ensp;</span></span>
                <span><LinkTrace href="https://dil.illlli.com/copyright" rel="noopener noreferrer"
                                 target="_blank">使用条款</LinkTrace><span className="gray">&ensp;丨&ensp;</span></span>
                <span><LinkTrace href="https://illlli.com/comments" rel="noopener noreferrer" target="_blank">
                    联系我们</LinkTrace><span className="gray">&ensp;丨&ensp;</span></span>
                <span><LinkTrace href="https://illlli.com/comments"
                                 rel="noopener noreferrer" target="_blank">合作咨询</LinkTrace></span>
            </div>

            <div className="Qr-footer-part">
                <strong>更多产品</strong>&emsp;
                <span><LinkTrace href="https://mus.illlli.com" rel="noopener noreferrer"
                         target="_blank">🌠在线音乐播放器</LinkTrace><span className="gray">&ensp;丨&ensp;</span></span>
                <span><LinkTrace href="https://chat.illlli.com" rel="noopener noreferrer"
                         target="_blank">ChatGPT🌠</LinkTrace></span>
            </div>
            <div className="Gray">
                Copyright © {currentYear} BTF. 保留所有权利。<br/>
            </div>
        </div>
    </div>
)

export default PartFooter
