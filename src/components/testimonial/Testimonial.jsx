import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Testimonial() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <div>
            <section className=''>
                <div className=" container mx-auto px-5 py-10">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{ color: mode === 'dark' ? 'white' : '' }}>Testimonial</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{ color: mode === 'dark' ? 'white' : '' }}>What our <span className=' text-pink-500'>Founders</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFRISGBUYGBgYGBgYGBIYGhgYGBgZGhgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGhISGjEhISM0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDExNDQ0NDQ0NDQ0NDQxNDQ0ND80NDExMf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIFBgcEA//EAEAQAAIBAgMEBwYEBAUEAwAAAAECAAMRBBIhBTFBUQYiYXGBkaETMlKxwdEHQmJyFCOSsjOC4fDxQ3OiwhUWU//EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/EACARAQEAAgICAwEBAAAAAAAAAAABAhEDIRIxIkFREwT/2gAMAwEAAhEDEQA/ANWhC0JzUQhCQEIQgESLEgESEIUsIk4MdtehR0qVUU8tSfIawO+ErmI6W0hoisx5sCg9dfSRlbpXVb3RTUcxmaZueMWY2rtEZgN5A75n1XG4ip/1T4GoJG4ujit4Jccs9j4ZjaY/rG5x1p6V0bRXUnkCD8p6TH6QxKk50qL2sR/cDp4SXwfSzE0CFcI6G1s7vfwex17DNTkn2XCxpMBI3ZW2adewF1ci+RrXtxKkaMO46cbSRnRgsIQgESELwCESF5NmiwjYXjYfCNtCU09YQhIyIQhAIQhAI0DlHRICSu7Y6W0aJKJ/McaWBsoPa32nD+IG1HRFooSC4JcjQ5Rwvwvr5Sk4ZNNbE+SqBz11mMstdRvHHay4jpLiqoshCDjlX/2bW8h/4dQcz1GZiTcvmOvaQLTmbaOtlRnA3WOUEjkOMb/8i/Bco5dZj/zOV8r7bkkSSBF1JU/qPs/sLzmrY9L2SkL/ABFQP9JxVMU35tD+1c39INl8Zx1KlViQiAHifef03R4tSpV9p1V3XHflQTyqbbq7rofGmfIyDr4B971kXssWb1M8ThUG56jH/KB6CWYQuV/E2m3yjddCBzW/1JB8504jaCuuZcrKeNuPJhvBlRdwu4kDkSCPEQw2JKHT3T7w+RE1eOe4TPvtdtg1szZAxU3zoQesjjcVPI/eaLsPaXt6d2sHWwcDdzDDsI17N0xXB4oo/VOosyns4r3S/dEtoH+JOoyOrGw0trfTuJtLj10zlN9r/CeaVVOoIP8AvjHzbmWJEvC8AhCJKpYRICEOvCJCDT2gIQhkQhCAQhCAQMIyq1lJsTYHQWudOEDOOmJL4piSMqhUW2uuW5J8TKxtDFKBkB6o4D8xHEnlPXH1X9o4CtozHNvsddGvu75AMxBv+YHfv/4nGY7u3WXU0mKLtYFjlB3AC1/PUz0erlPWa54KLE/1MbCR+GqZzbUni2ug7T9O2dlDC9YBEZn3nde/yQdu+Lqe2sZs5q7WuaaIDrZrsx7SmnmTObFbRNsoAsOwW/pFhO6tst7dbyW9vE7zOUbJuNd/L/QTPni6/wAsrEJXrseZ8h6Ccr5z8Q8ZbsHsAWuRr2zuXYQ5CP74z0s/zZWd1njK3ERUe2+X6vsBSPdF5CYvo8w3Cbx58cmMv82WPc7Refrqey3oDLR0Y2iabhzwBA38bd0qtfCupAIN5K4Rigtz1tNZTc3HOflaau1nqWNJLNa17579hUGS+yMXUYlKqgOBm0tpuHhfW1+UzvYWOKt1HKFjbNyNtzrusfiG6aTsV1amHVSCxbPmN2zqSrZjx1G/laMbazlNJCESE2yDEvFMSEoixIQohFhA94QhDIhC8IQQhCFEhulW0fYYd2Bs7dRO9uPgJMzNfxFxT+1VM/VVbhRa2u8nmTaTK6hParY9S63JJ8dT5cJE5GPVN+Qvqe4ST9uAhvqToBzMZh6BzoDqSRfv32HYJzl1HSTdT+y9gvksgtpmZj8XBRzY8+EsuztirSWygliAWY7yZLYFAEUAbgJ7g2nDXl7eqXXpFVNm8TOc7LXfaTb6zxcHlMZYz6dcc6jkwgjv4cCdiboyot5jxjXlXC9Mcp4NhweE6nQzzVTLIWqX0twoVlYC0hHYMACe5t3gZbul9K9O9t0owe4tPVxd4vJyzVSeAqMrqMxALKL8iGH2vNr2dhwiWF7E5tdTqBc+Nr+MxbYOFNaoibzo3eFOvpNxoJlUDkAPKdMZ245XqFMLxYxh26TbB0ICEqiEBCQEIQlR0WhaEI0gMIQlQQhCFEzT8QsIRVLEmzAEchwt6TS5V+nuEzYZnHvIR5HQzGU3Fntj1a6kai+82+Undhgu6A3LZt/zkGVub7+EuXQTZ5LNUbcmgHaRe58LTnyX4uvHPkvdBbADsg1RRqWHnODE1Kj3VFAF7XJtfykVitjsR164Udm//ScY7LE+Kpgf4ieYnmuIRvdYHuIModbZdHNb+JPLda/jJ3Y+xFQ5kqMeP++cmVn03jjZ3VhdLWnhisUiC7EAAToxF1TtlU2rURjd2tYSXUum8Zco9K/SjDg2LHyMcnSHDnc/pK//AAuGPWfNlvvZlUepHpEGDwDe4Xv2PceNidJrWOvti+W9dJ/aipWosUIII8jMyVSrkHhcHw3S84fB5CDSfqneLmx8ZWOkuF9niRpYOob5gzfFZuyMcs6m/pP/AIa0w+JvxVHb1VT85rUzX8KsA2epX/JlKD92ZWPpbzmlzvHkyvZIkdEMpokDCEKBCEWAkI68ITp7QhCaQQhCEEIQhRObaGFFSm6HcykfadMI0MS2psZqFbJcH/nfLl0GT+QzfE7elhF6ZYBndio1bItx+q/2nZ0Sw+TDKmuhf+4zyZXvT1Y46m3TtDPlIpi3iF9eEr+1tnM9AE53q6hk66JbmhU2JBG9jrcy1mnxMa6X4TMvj23Z5TSi7K2aqUCKlNval76EdVbAAEk63sT4yzbFGUbj2X+4nemBUm5E6UpgDQDSZu7d103Jj4x444Ep4TP9pUnL666+E0SsdN0ruMwwJuR390zlbLtrD1pEJRDUsoRBVDB1c9a5AIysrD3bE6DvnFhcGEpOjUw9RyOubKEA3ZSNb6nWWRcICLiL/C33ia/rdaLx427+0Hsqk6GxIIPznP07woK0XtxZD4i4+Rlpp4VRrIfpsl8MvZVT1DCXjvy2xy9zSU/DJLYdwRqKl/NV+0ukrfQXB5MOW+N2PgvVHyMs09WN3HizklshsIpES00hIkdCDRBC0IoEAtCLlhA9YQhNMiEIRsEIQgEUCJFhETt2kMua3f4bpybGI9mLbgW+d/rJvFIChv3yEwwVHZRoDZh46H5Ty8mOst/r1ceW8dfiTCXnmUEcjzyxVSwkutNSXbwxFexAXeZ1U6el7zjw1L8zcZH7UxSqVBdwFI0ViD6a2mZ+10snqVOYlNJC4pA3V3HnExm3EC2V1JtxOo75Tjtk+2a1Q6/Fe3+XgJMpv1GsJr3VpwJJBB4aeU7EFtDrIzAYgZQQb+M7hiVO6co6WbejgSC6TpnSmgBN6qkjsVWJ+kkvbRlJs9VABcg7u9h9jOmF7cs50tWzcP7OkicQov3nU+pM6YsJ7ddPDvZIkUwkDSIARYogJlgIsbKHwiXhLsekIQlZEIQjQIQhAIGEICMtwQeMhcfhWQh81x7trbuX1k3PLE0c6Fee7v4TGeMyjWGVxRdN7jtnhjnyKWNzYecZTYgkcjb6WnrilzLbunkv49mKvNtao1RUZ0RTvuQDv+0kf4XDE3LFjzB07bR+G2RSJzOiMdd4B+c70FOmLBQF5cBLN32t8Z6VnGbOo5mdamVWtmUi97cpD1tn4UG92HbcfK8tOM2hhr6smvMSFxL0HOVQCD8K29Zm3X27YzGz0r1avkOWjUJHIXNvtO/Ym0KjOVfePWSS4VEW+RRx3Tyw1JQxcW3WFh5yXKWa0THV3t2YitYaSwdE8OpQ1SozMbAkagDeB43lXqAswVbljuA43mgYDCilTVB+Ua9p/MfOdeHHvbzf6Mvp0iBgIT1PKSF4pjCw8ZKHQjbx0AjYpEAIBCLaED0hCE0yIQhAAYQhARmiiNI1vFBkCwhCUQ+1kyMHA6p97sI4zxFQMNDJHaBBsNL6m3ZIDGUXQ50Iy8VO6/ZPLyz5V6+K/F70XKnXKBz53naxDC2hlbxG1bGxGU8yCbd0fhtuICR6zMvTX27Mbs6m1jlXyE4ThkX8qiGI22mo5X85A4/bK2sp4a6zncbfTtMtTt6bUxIOgOkTDOFXUyuDFF2015yYweFZ+s9wo3LwPfNXGYztmZW3pd+imAuPbtvNwg5DcW75ZpGdHnU0FAIJUkEDgb3sfAjzknPVhJMZp4s7bldiLCE2yab9kZbW89DGQgvHCNi3kIWLEBiyqIRYQHwhCVkQhCAQhCAWiRYhihZH7d2muGoPWbXINBzY6KPOd5Nhc7pk34ldJUrlaFJrohJdhuZ9wA5ga69ssgtux8UznM7Xd0QnvsSbeclXS4lT2bV6qMPhX+0S04epmW848uF3uO/FnNacOJ2arbxccpFYro4p1DMPLhLUTPKpPNZ+O8v6ouJ6OnW7N5yOqbBVdTmOt7X0l+xK6SFxKXmLllPt2kxs9IHB7OAPu2El8oGkEUCTex9j5znqDqflX4u09kuOOWeWoZZY4Y7rn2RXOGRKjjKtauykH4CoVGPil+5pcJTvxCcCgg3fzFt4K26SXRfb6YlApNqqqMy/FbTMJ9Dx1I+Zct21P3hC8SQF4kIGAkSLEkC3gDEhAdnhG5e0wlV0QhCVkQhCAQjatRUGZmVVHFiAPMytbV6b4alohNVv0Wy+LH6QLOZFbX29h8MCalRQeCL1nP8AlG7xma7X6c4mrdVYU0Olk327XOvlaVbEVixLFiSd5JvNeKLJ0p6Z1MTdEulDiv5n/eR8t0prvcx1R55A6yq0bo1Vz0EPJQPLSW3AVLSh9Dqn8ojkxH1+su2BOghEuRpcbvlGNEpPaezUyRdfL7Tz8nF9x3w5frJwV1kPil1sATeTeUsbAeM68Ls9VOY6tz+08+PBllfyPReaYz9R+ydj2IeoNd4Xl39sniNIqiDT3YYY4TUePPPLK7rOfxGxfXpU+AVnPeTYfIyp4XFshDIxVlN1I3gyY6fVc2KYfCir8z9ZWVa02w07Y3TimwVcQCj7i4F0PIm2oltoV0cZkdWU7ipBHpMKDTowO0atBs1Ooy9x08QdDM3EbheEzvZfT9xpXphx8SdU+I3H0lqwHSbDVd1VVb4Xsp9dDM+NaTMI1XB1BBHMRbyKWES8LyJosImaEpp0wYgakgDtme7V/ES11w9PsDufUKPrKbtLpDiK3v1XI+G9l/pGk1pGs7R6VYWjfNVVmH5Usx9NBKltP8RXIIoUwn6nOY+W6Z81QmMLzXiiU2jtitXN6lR37zp4AaSPapPEtGs9pQYhMw3znQMNC2k9XeMJgebREOsVo1d8irr0PHVcfqHyl8wo0lG6Em5cdgP0l8pwjqLgak2AFyeFhvmddI+l1Ss7UqZZKK6aaM/6mPAchJ7pLiXe1GmSOLkfD8H1PlKZt6gEroR+ZLHvU7/X0ge+ydu4jCv7RajMl7vTckhhxsT7p7ZrmxNr08VSWpTOhAup95TyI+syDAbOfEVFpJbW7EndZd9+cuWFwFTCZXWoS3EWspHK3KBfohE49mbQWsmYaEe8vIzsYwMY6YPfF1exreQEhJ39IK2fE1W5u3zkfeaiFDETz6zHU2HIcfGOvFEinAxweed4sqJPAbZrUf8ADqOo5XuPI6S07O6euNKtNX/Upyny3GUK8cGkuMXbYcB0ow1X/qBG5P1fXdJlHDC6kEcwQZg4cztwm1KtP3Kjp+1iPSYuLW22wmR//bMV/wDu/wD4/aEeNNquXiZpz3jlabZe14l4wNFzQHTnxB9J7Xnk4kBeEbROlo4wprTzE9GnlKLj0HqWq2+JD5jWaHY2038PvM46DgHEpf4WPkJqWWREHiMJYE+Z4mUTpVVX21JF3qCT2ZiLX8jNIx7gDWY5j8V7TEu/At1e4aD5QLV0J2mtPFj2mgINO/AF7FWPIXFvGaZjaYcTFsliW4nl2TXOjGL9thqbnVitm/cpyn5eso4qNCrRb2iDS+o4EcjLA+PVqLOp3Kb9hA3GPYXFjKvt69EMUNlcFWXhrxkGZV3zOx5sT5mNMYp1PeY6UIYKYhiwFMdeNiwFvAmIYRsKDFEaI4ShbwjoSKizGq0L6Rsg9QYt40Qg0deDRBFMDxXRp6meVTfePBgBnkZ7GeDwLN0NqWxNPtJX+pSJrTbpi2w62SojcnU+FxNpb3YRVuleNyUXYbwpA720HzmVYbRpoPTt/wCS3a6D1lApjXtlEsDcTRvw7rXw7J8DnyYA/eZpSbSXv8NqutZf2N6sIovrGVDphU6vmfKW120lC6a17I37T66fWQUKjunqZ50t0e0oaYsaY4CAqxYkIAYQiwFWOiCEqFvCJCDtEwhCZV6LFhCVoohCEiPOrujl3RYQCeLwhA7cBvHhNvT3B3QhCKF05/wj+9PrKIu+LCB2pLx+G3v1f+2n90IQL9W3TOenHut4f3QhKKfR3RTCEBkfCEBYQhAI6EIgWEISoIQhA//Z" />
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">Exceptional variety and top-notch quality. The homemade products I received are now cherished parts of my daily life. Truly impressed!.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Pruthviraj Rajendra Chavan</h2>
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500">Product Designer</p>
                            </div>
                        </div>

                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://play-lh.googleusercontent.com/6jtumYh-6AnkvH6S3M0Sh2Kwa-_GorWtXAIQ3ISHvGkU95nbZonrMtWAF3LOM7WYbg=w240-h480-rw" />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed">Unique, stylish, and eco-friendly. These handmade products have added a delightful flair to my living space. Highly impressed with the sustainable approach.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">React Js</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">UI Develeoper</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://webknudocs.vercel.app/logo/react.png" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">React Js</h2>
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="text-gray-500">CTO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial