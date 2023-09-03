import Image from "next/image"

import { AuthorDatum } from "../_types/types"

type Props = {
  data: AuthorDatum
}

const AuthorBackground: React.FC<Props> = ({ data }) => {
  return (
    <div className="absolute inset-0 h-80">
      <Image
        priority={true}
        src={`http://127.0.0.1:1337${data.attributes.background.data.attributes.url}`}
        alt="Author background"
        fill
        className="object-cover object-center"
      />
    </div>
  )
}

export default AuthorBackground