import { DomNode, el } from "@hanul/skynode";

export default class Team extends DomNode {

    constructor() {
        super("section.team");
        this.append(
            el("h2", "The Team"),
            el("section",
                el("h3", "0xDesertFox"),
                el("p", "팍스펑크를 기획 및 개발했습니다. 귀여운 것을 사랑하며 귀여움이 세상을 지배할 것이라 생각합니다."),
            ),
            el("section",
                el("h3", "Wavo"),
                el("p", "팍스펑크를 디자인 했으며 사막여우의 귀여움을 그림에 녹여냈습니다."),
            ),
            el("section",
                el("h3", "Cion"),
                el("p", "팍스펑크의 순항을 위해 커뮤니티 빌딩을 비롯한 다양한 부분에서 도움을 주고 있습니다."),
            ),
        );
    }
}
