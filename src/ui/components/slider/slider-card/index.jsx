import { Card, AvatarCard, TextArea, ReviewsAuthor } from "./components"

export default function SliderCards({ content, avatarSrc }) {
    return (
        <Card>
            <figure>
                <AvatarCard src={new URL(`../../../img/${avatarSrc}`, import.meta.url).href} alt="Avatar Card" />
            </figure>
            <TextArea>
                    {content}
            </TextArea>
            <ReviewsAuthor><strong>Jannike Borg,</strong> Publisher</ReviewsAuthor>
        </Card>
    );
}
