import { DomNode, el } from "@hanul/skynode";

export default class Roadmap extends DomNode {

    constructor() {
        super("section.roadmap");
        this.append(
            el("h2", "Roadmap"),
            el("section",
                el("h3", "2021 4Q"),
                el("ul",
                    el("li", "FoxPunks 론칭"),
                    el("li", "팬케익스왑 NFT에서 거래 시작"),
                ),
            ),
            el("section",
                el("h3", "2022 1Q"),
                el("ul",
                    el("li", "코인 적용, 팬케익 스왑 풀 생성"),
                    el("li", "파트 변경 기능 론칭"),
                    el("li", "클랜 시스템 론칭"),
                ),
            ),
            el("section",
                el("h3", "2022 2Q"),
                el("ul",
                    el("li", "메타버스 Foxverse 론칭"),
                ),
            ),
        );
    }
}
