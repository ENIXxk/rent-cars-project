<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" indent="yes"/>

    <xsl:template match="/">
        <html>
            <head>
                <style>
                    footer {
                        background-color: #333;
                        color: #fff;
                        text-align: center;
                        padding: 20px;
                        font-size: 2vw;
                        overflow: hidden;
                    }
                    .footer-links {
                        list-style: none;
                        padding: 0;
                        display: flex;
                        flex-direction: row; /* Элементы размещаются в строку */
                        justify-content: center;
                        
                    }
                    .footer-links li {
                        margin: 0 10px; 
                    }
                    #email{
                        color: white;
                    }

                    /* Добавляем медиа-запрос для адаптивности */
                    @media (max-width: 600px) {
                        .footer-links {
                            flex-direction: column;
                            align-items: center;
                        }
                        .footer-links li {
                        }
                    }
                </style>
            </head>
            <body>
                <footer id="footer">
                    <p><xsl:value-of select="foot/rights"/></p>
                    <ul class="footer-links">
                        <li><div id="email"><xsl:value-of select="foot/li/email"/></div></li>
                        <li><div id="insta"><xsl:value-of select="foot/li/inst"/></div></li>
                        <li><div id="phnum"><xsl:value-of select="foot/li/phnum"/></div></li>
                    </ul>
                </footer>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
