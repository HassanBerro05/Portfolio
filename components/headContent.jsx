import Head from "next/head";

export default function HeadContent({ title, description }) {
    const faviconUrl = "H.jpg"
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="icon" type="image/png" href={faviconUrl} />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={faviconUrl} />
            {/* <meta property="og:url" content="URL of your page" /> */}
            <meta property="og:type" content="website" />

            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={faviconUrl} />
            <meta name="twitter:card" content="summary" />

            <link rel="apple-touch-icon" sizes="180x180" href={faviconUrl} />
        </Head>
    )
}