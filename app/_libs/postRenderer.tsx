import RichText from "../_components/RichText";
import Quote from "../_components/Quote";
import Media from "../_components/Media";
import VideoEmbed from "../_components/VideoEmbed";
    
export function postRenderer(section: any, index: number) {
  switch (section.__component) {
    case "shared.rich-text":
      return <RichText key={index} data={section} />;
    case "shared.quote": 
      return <Quote key={index} data={section} />;
    case "shared.media":
      return <Media key={index} data={section} />;
    case "shared.video-embed":
      return <VideoEmbed key={index} data={section} />;
    default:
      return null;
  }
}