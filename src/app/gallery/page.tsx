"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Pagination } from "@/components/Pagination";
import { Phone, Eye, CheckCircle2, X } from "lucide-react";

export type GalleryItem = {
  id: string;
  category: string;
  categoryLabel: string;
  image: string;
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    "id": "g-1",
    "category": "other",
    "categoryLabel": "Signage & Branding",
    "image": "/gallery/1bb3e241-d527-4d38-b3a5-f7f3666a5672.jpg"
  },
  {
    "id": "g-2",
    "category": "other",
    "categoryLabel": "Signage & Branding",
    "image": "/gallery/a0ed9761-bd6b-492d-8572-146480976ee8.jpg"
  },
  {
    "id": "g-3",
    "category": "other",
    "categoryLabel": "Signage & Branding",
    "image": "/gallery/f3adeaec-e9ff-46bc-988e-acd191232be5.jpg"
  },
  {
    "id": "g-4",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/gallerypage.jpg"
  },
  {
    "id": "g-5",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/gallerypage1.jpg"
  },
  {
    "id": "g-6",
    "category": "other",
    "categoryLabel": "Signage & Branding",
    "image": "/gallery/home-gallery.jpeg"
  },
  {
    "id": "g-7",
    "category": "other",
    "categoryLabel": "Signage & Branding",
    "image": "/gallery/home-gallery1.jpeg"
  },
  {
    "id": "g-8",
    "category": "other",
    "categoryLabel": "Signage & Branding",
    "image": "/gallery/home-gallery2.jpeg"
  },
  {
    "id": "g-9",
    "category": "other",
    "categoryLabel": "Signage & Branding",
    "image": "/gallery/home-gallery3.jpeg"
  },
  {
    "id": "g-10",
    "category": "other",
    "categoryLabel": "Signage & Branding",
    "image": "/gallery/home-gallery4.jpeg"
  },
  {
    "id": "g-11",
    "category": "other",
    "categoryLabel": "Signage & Branding",
    "image": "/gallery/home-gallery5.jpeg"
  },
  {
    "id": "g-12",
    "category": "inshop",
    "categoryLabel": "Inshop Board",
    "image": "/gallery/inshop-branding.jpg"
  },
  {
    "id": "g-13",
    "category": "stall",
    "categoryLabel": "Stall & Exhibition",
    "image": "/gallery/kisosk-stall.jpg"
  },
  {
    "id": "g-14",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/main-boards.jpg"
  },
  {
    "id": "g-15",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/outdoor-boards.jpg"
  },
  {
    "id": "g-16",
    "category": "standees",
    "categoryLabel": "Standees",
    "image": "/gallery/standee.jpg"
  },
  {
    "id": "g-17",
    "category": "standees",
    "categoryLabel": "Standees",
    "image": "/gallery/standees.jpg"
  },
  {
    "id": "g-18",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/ananda/main-boards.jpg"
  },
  {
    "id": "g-19",
    "category": "inshop",
    "categoryLabel": "Inshop Board",
    "image": "/gallery/anik/inshop-mall-branding.jpg"
  },
  {
    "id": "g-20",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/anik/main-board.jpg"
  },
  {
    "id": "g-21",
    "category": "standees",
    "categoryLabel": "Standees",
    "image": "/gallery/anik/standees.jpg"
  },
  {
    "id": "g-22",
    "category": "acp",
    "categoryLabel": "ACP Boards",
    "image": "/gallery/baidyanath/ACP-Boards.jpg"
  },
  {
    "id": "g-23",
    "category": "inshop",
    "categoryLabel": "Inshop Board",
    "image": "/gallery/baidyanath/Inshop-Branding.jpg"
  },
  {
    "id": "g-24",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/baidyanath/main-boards.jpg"
  },
  {
    "id": "g-25",
    "category": "inshop",
    "categoryLabel": "Inshop Board",
    "image": "/gallery/bajaj/Inshop-Branding.jpg"
  },
  {
    "id": "g-26",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/bajaj/main-board.jpg"
  },
  {
    "id": "g-27",
    "category": "inshop",
    "categoryLabel": "Inshop Board",
    "image": "/gallery/bajaj/Recks.jpg"
  },
  {
    "id": "g-28",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/bisleri/11550231-5274-4f03-a893-aa81e106d2c4.jpg"
  },
  {
    "id": "g-29",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/bisleri/149108dd-769c-498a-89c5-006ed80372d5.jpg"
  },
  {
    "id": "g-30",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/bisleri/234f9c0e-f3b0-466d-a991-3f44e9b51824.jpg"
  },
  {
    "id": "g-31",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/bisleri/25201800-df89-4b4d-a8b2-68de003904d1.jpg"
  },
  {
    "id": "g-32",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/bisleri/356db515-cd91-4d32-ab8f-c01d1638e230.jpg"
  },
  {
    "id": "g-33",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/bisleri/5ce64aff-be95-4227-bb6c-0bb7cd2a19ad.jpg"
  },
  {
    "id": "g-34",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/bisleri/61f232e1-398a-497e-9813-d3fccc042ac8.jpg"
  },
  {
    "id": "g-35",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/bisleri/6276e535-307a-4eec-a8a9-f0a0db92c6ee.jpg"
  },
  {
    "id": "g-36",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/bisleri/629fd965-e539-4c8a-8119-18577c232810.jpg"
  },
  {
    "id": "g-37",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/bisleri/66b9bdaf-363c-4789-a3f3-38eb0453e20c.jpg"
  },
  {
    "id": "g-38",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/bisleri/707ac246-4459-43e4-8703-b8176b04d46c.jpg"
  },
  {
    "id": "g-39",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/bisleri/74f2cdb0-0ded-4cfd-aed7-52e07ba9ab31.jpg"
  },
  {
    "id": "g-40",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/bisleri/74f5c929-f24c-40d9-80f5-78f5403fe478.jpg"
  },
  {
    "id": "g-41",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/bisleri/8dbc71f3-f60a-40f3-afe9-00640e5b07fc.jpg"
  },
  {
    "id": "g-42",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/bisleri/9ac20b8b-e7ce-482f-9c1f-4a4970e4d849.jpg"
  },
  {
    "id": "g-43",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/bisleri/a1cc81f2-f079-4348-bf7b-b2ccd8625d92.jpg"
  },
  {
    "id": "g-44",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/bisleri/b273279b-56ba-4347-969b-d122ac5d7978.jpg"
  },
  {
    "id": "g-45",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/bisleri/c6ec9467-f792-41fd-b07c-9817135a43f7.jpg"
  },
  {
    "id": "g-46",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/bisleri/cf5f94db-ce49-4e74-9c34-fcd093e8c661.jpg"
  },
  {
    "id": "g-47",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/bisleri/d3305689-b977-4ed8-82bb-162359f6007a.jpg"
  },
  {
    "id": "g-48",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/bisleri/f07a032c-ab12-4ff1-8fc2-c1b2429f5fca.jpg"
  },
  {
    "id": "g-49",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/bisleri/ff8cf63d-0650-4476-86c7-d432d130e6e2.jpg"
  },
  {
    "id": "g-50",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/bisleri/main-board.jpg"
  },
  {
    "id": "g-51",
    "category": "stall",
    "categoryLabel": "Stall & Exhibition",
    "image": "/gallery/bisleri/stall.jpg"
  },
  {
    "id": "g-52",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/bisleri/van.jpg"
  },
  {
    "id": "g-53",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/campa/19a6767b-c487-49ea-9dd0-d9c3892cdfda.jpg"
  },
  {
    "id": "g-54",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/campa/1f4285c8-8a43-463f-8b6d-0356fba1aa60.jpg"
  },
  {
    "id": "g-55",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/campa/2498ff09-4fde-459c-a0fe-ecb4a06fef3c.jpg"
  },
  {
    "id": "g-56",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/campa/2600c973-8fb8-42bf-ae5d-fd2fc64089fa.jpg"
  },
  {
    "id": "g-57",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/campa/2881558d-c447-490f-8260-a8b786629f67.jpg"
  },
  {
    "id": "g-58",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/campa/29caec22-6c1d-44d8-a1d7-eb1f373f47f5.jpg"
  },
  {
    "id": "g-59",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/campa/2a6b8847-322c-4e40-83d4-46aeaa39a68c.jpg"
  },
  {
    "id": "g-60",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/campa/2da6897f-4e51-4af4-b9ce-6ec8ec13c67c.jpg"
  },
  {
    "id": "g-61",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/campa/2dfd589f-d1b0-43c7-94aa-529d6af643cf.jpg"
  },
  {
    "id": "g-62",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/campa/322d52a0-a73e-43f2-a608-a08cb4444be2.jpg"
  },
  {
    "id": "g-63",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/campa/4702399e-5b01-4be8-89b6-95d408ff67aa.jpg"
  },
  {
    "id": "g-64",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/campa/47ea3f46-de5f-45a0-bd3a-c51755dd2a80.jpg"
  },
  {
    "id": "g-65",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/campa/4ee69824-bca3-45a0-8e7f-5367368737b3.jpg"
  },
  {
    "id": "g-66",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/campa/5116ca04-6979-4a91-8426-f40f7b914fea.jpg"
  },
  {
    "id": "g-67",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/campa/526e0e54-be8f-46f7-9f90-b249507b290c.jpg"
  },
  {
    "id": "g-68",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/campa/5290179a-082f-478c-81bb-850ba4b70bc9.jpg"
  },
  {
    "id": "g-69",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/campa/5c7b1046-8ba8-4fcf-b6c6-af98123c90c9.jpg"
  },
  {
    "id": "g-70",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/campa/5eae3c90-64d0-4365-8fcb-79c9d4ae206a.jpg"
  },
  {
    "id": "g-71",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/campa/6958ac47-0a76-46e6-af29-ab8cfa64b7ee.jpg"
  },
  {
    "id": "g-72",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/campa/732c7c0a-b088-4056-8a2c-1b2f75d69446.jpg"
  },
  {
    "id": "g-73",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/campa/73d62df6-50c5-405b-8e30-19f69ef9c31a.jpg"
  },
  {
    "id": "g-74",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/campa/7c2fdeac-1742-4eb4-8980-fae60df54875.jpg"
  },
  {
    "id": "g-75",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/campa/7d196b50-2732-4254-ba4c-152b55ddbd09.jpg"
  },
  {
    "id": "g-76",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/campa/86e01996-635e-4499-bc11-21144c31ce5c.jpg"
  },
  {
    "id": "g-77",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/campa/8aa831d6-43f4-4d6a-a479-ff343a3cb4fd.jpg"
  },
  {
    "id": "g-78",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/campa/93d3642f-2ce6-4074-a30f-b8a54d87f718.jpg"
  },
  {
    "id": "g-79",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/campa/9b3c5178-3c9a-42fb-b160-fb07ddee428d.jpg"
  },
  {
    "id": "g-80",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/campa/a3ee0b6c-49d0-4320-a7b8-f89110391b19.jpg"
  },
  {
    "id": "g-81",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/campa/a40bc56f-49c3-4ecb-ade4-e7e3324c9aa7.jpg"
  },
  {
    "id": "g-82",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/campa/a7155bfb-cb5c-4496-a650-96ba6bd5cad8.jpg"
  },
  {
    "id": "g-83",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/campa/b15bedf8-7b23-4be0-b500-0a808528ec2d.jpg"
  },
  {
    "id": "g-84",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/campa/b91f668d-3739-4461-b24c-9d3c308a33b5.jpg"
  },
  {
    "id": "g-85",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/campa/bbe66f73-4bb2-4f72-81f1-59f5c871060a.jpg"
  },
  {
    "id": "g-86",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/campa/c542f230-a490-44f4-81f8-29a4895acd73.jpg"
  },
  {
    "id": "g-87",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/campa/cb2bf498-534b-45a2-9596-839022a04e46.jpg"
  },
  {
    "id": "g-88",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/campa/e60add01-f071-429a-b892-214c6f9465b2.jpg"
  },
  {
    "id": "g-89",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/campa/eb5b1b02-599d-4eb1-b400-7ed172895383.jpg"
  },
  {
    "id": "g-90",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/campa/ede5150c-1aca-454f-a5bb-ad5ae0bb1c84.jpg"
  },
  {
    "id": "g-91",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/campa/f05a1580-5878-4dc9-a9a2-bf00c81069af.jpg"
  },
  {
    "id": "g-92",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/campa/f4e64a2a-62c8-4ed3-8403-0197d9463bfb.jpg"
  },
  {
    "id": "g-93",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/campa/f693d8e0-0cab-4656-918a-243f195567a5.jpg"
  },
  {
    "id": "g-94",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/035e3f79-abdb-4e64-b3ad-ece2d9552c5a.jpg"
  },
  {
    "id": "g-95",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/055e0b6c-6ccb-40cf-b3f4-b4a0a8e5456f.jpg"
  },
  {
    "id": "g-96",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/10b9e6bf-add6-4c95-9dfb-0e20021191e3.jpg"
  },
  {
    "id": "g-97",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/160ab68e-0c50-4b52-a174-1d8e19263f21.jpg"
  },
  {
    "id": "g-98",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/17bc1a65-6db5-4a04-8676-5075476a147b.jpg"
  },
  {
    "id": "g-99",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/18819282-4be4-4039-ba6c-d70f371a3980.jpg"
  },
  {
    "id": "g-100",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/1c45f3c3-49b0-42cc-80d4-bc139a7897a7.jpg"
  },
  {
    "id": "g-101",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/20c551dd-cbbc-43ae-a1bf-50979f24755e.jpg"
  },
  {
    "id": "g-102",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/23ad2f89-4fa9-47fd-b45f-10149400c0f0.jpg"
  },
  {
    "id": "g-103",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/254015c4-3b12-41ca-9e75-acee4fb9fa4d.jpg"
  },
  {
    "id": "g-104",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/294196d4-54e5-4122-87bd-6928dc9474b9.jpg"
  },
  {
    "id": "g-105",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/33eb8d20-ac29-486b-8c32-5c993584e76f.jpg"
  },
  {
    "id": "g-106",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/341f8e3e-ada1-4360-893e-d8aae01dda99.jpg"
  },
  {
    "id": "g-107",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/3635f2d3-615e-4ded-9353-5f1d26f108c3.jpg"
  },
  {
    "id": "g-108",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/3669195a-2916-49bb-83ae-e2740ba4d8df.jpg"
  },
  {
    "id": "g-109",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/36df44ae-d942-40cd-86f1-cd2e23fec960.jpg"
  },
  {
    "id": "g-110",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/37e7578a-f4e8-470c-8f27-2e8a9d19ddf1.jpg"
  },
  {
    "id": "g-111",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/466419f9-4eeb-4112-8449-90d7b94a7c79.jpg"
  },
  {
    "id": "g-112",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/468f7c14-1501-4282-a33c-e3d3074a8e62.jpg"
  },
  {
    "id": "g-113",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/46b6ef56-1839-40c5-911b-99ae0c838ebc.jpg"
  },
  {
    "id": "g-114",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/4b117375-9bab-4c6e-9ff5-0f0c55205dd8.jpg"
  },
  {
    "id": "g-115",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/4fa502f5-9bd2-4ec7-b762-b43dce7a598e.jpg"
  },
  {
    "id": "g-116",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/51890191-57d9-4d42-9d9a-1ca98b1686c4.jpg"
  },
  {
    "id": "g-117",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/5526d6d3-8120-49ce-a4a9-497221ba59eb.jpg"
  },
  {
    "id": "g-118",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/552b81b5-941d-4c30-bdb4-ff3e3d32ef15.jpg"
  },
  {
    "id": "g-119",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/55d7ba77-e773-4e11-a388-d95981be550f.jpg"
  },
  {
    "id": "g-120",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/5cc70136-054c-4919-a530-fc47669c6404.jpg"
  },
  {
    "id": "g-121",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/5d06a40d-5ed5-4b3e-9fbb-f7d32c762236.jpg"
  },
  {
    "id": "g-122",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/5ddcff81-28a7-48ef-9678-7aafa00f1b0c.jpg"
  },
  {
    "id": "g-123",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/6d674fb4-fe42-4df8-9452-e83d84be4ece.jpg"
  },
  {
    "id": "g-124",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/708f99ce-0a14-4e83-ad4c-9570ab54b662.jpg"
  },
  {
    "id": "g-125",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/75beaf1b-2f6c-42f3-a6eb-cc25ba2438b2.jpg"
  },
  {
    "id": "g-126",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/7b6f7956-d835-4cd8-95f9-18a8aa3980a5.jpg"
  },
  {
    "id": "g-127",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/7c6e98cf-3877-43a3-a53e-8ea205a93880.jpg"
  },
  {
    "id": "g-128",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/7defc2f7-6929-44da-9948-ad4a8807b287.jpg"
  },
  {
    "id": "g-129",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/7fcf1de5-a445-4bb2-a9a8-cc66b0e03621.jpg"
  },
  {
    "id": "g-130",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/81ef8335-001e-4cab-8c52-eb607006adbc.jpg"
  },
  {
    "id": "g-131",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/81f06404-21e8-49af-9150-9362933dafd5.jpg"
  },
  {
    "id": "g-132",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/82fbb33b-7b6b-4fa2-817f-57c549d55bec.jpg"
  },
  {
    "id": "g-133",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/8566165f-f340-4746-835f-0fba625b1586.jpg"
  },
  {
    "id": "g-134",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/874e24f5-b008-4ac1-aeff-d8583f72ce0e.jpg"
  },
  {
    "id": "g-135",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/87c81dbf-90de-4da6-a41f-d2422df2a364.jpg"
  },
  {
    "id": "g-136",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/888c9907-e71c-413b-a700-07d0f2e1f615.jpg"
  },
  {
    "id": "g-137",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/8a3c9e4b-9a8d-4fe2-bb25-ca9161cce4df.jpg"
  },
  {
    "id": "g-138",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/8b4bd9ec-6195-41eb-ba69-adf1b53a0b90.jpg"
  },
  {
    "id": "g-139",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/90bbe0de-2f1b-4c41-aa50-27663f3a953e.jpg"
  },
  {
    "id": "g-140",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/91f9097c-7e9f-4029-aee6-b577230fac04.jpg"
  },
  {
    "id": "g-141",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/94299af9-8fae-43f4-a37e-73ca5d88235d.jpg"
  },
  {
    "id": "g-142",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/98a4345f-ab5f-43b4-9d2c-93991a2a14f7.jpg"
  },
  {
    "id": "g-143",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/998ebdf9-76ec-433f-9572-4fae094491cd.jpg"
  },
  {
    "id": "g-144",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/9c4faa49-f3d1-4243-b0fa-927b5e0d3ef6.jpg"
  },
  {
    "id": "g-145",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/9ff01468-e64b-4ce2-b1d5-c3baf1f1c80a.jpg"
  },
  {
    "id": "g-146",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/a4d1be57-f253-45e0-ac99-571882349760.jpg"
  },
  {
    "id": "g-147",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/a518b0c3-7deb-4354-a34a-e95a5cc0175b.jpg"
  },
  {
    "id": "g-148",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/a5673c24-8241-428a-88f0-e187fd39a3bc.jpg"
  },
  {
    "id": "g-149",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/a6f07ec0-356b-4137-aba3-3e658117b789.jpg"
  },
  {
    "id": "g-150",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/a7217b60-dc9e-4bb8-9d21-edcb4179bc48.jpg"
  },
  {
    "id": "g-151",
    "category": "acp",
    "categoryLabel": "ACP Boards",
    "image": "/gallery/coco-cola/acp-boards.jpg"
  },
  {
    "id": "g-152",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/b4025838-e0ee-4866-bc43-475fbf051c70.jpg"
  },
  {
    "id": "g-153",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/b53baf0e-704b-4833-90a9-1924a4065e3a.jpg"
  },
  {
    "id": "g-154",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/b56d45ad-cb04-4103-b645-091c0d95ae7e.jpg"
  },
  {
    "id": "g-155",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/b7230f3e-91eb-4021-bc0f-9ce61a36d150.jpg"
  },
  {
    "id": "g-156",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/c1546a1c-f996-4817-b43a-ee98ec67c9cb.jpg"
  },
  {
    "id": "g-157",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/c15a5083-1af5-4178-b932-63185edb3060.jpg"
  },
  {
    "id": "g-158",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/c538161c-6bce-4541-a500-af51daa3e26f.jpg"
  },
  {
    "id": "g-159",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/c617709c-e40d-48d3-b765-24089f4150d6.jpg"
  },
  {
    "id": "g-160",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/cc832108-65a1-4654-88b7-4ebd9b21494c.jpg"
  },
  {
    "id": "g-161",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/d1dd48c1-2a02-4ab4-a120-78de593d747e.jpg"
  },
  {
    "id": "g-162",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/d4c62ceb-aeb1-482e-beb4-a3f972c60b08.jpg"
  },
  {
    "id": "g-163",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/d655fee0-27b8-433d-ae94-02fc0a446bdf.jpg"
  },
  {
    "id": "g-164",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/Delhi-Zoo-Branding.jpg"
  },
  {
    "id": "g-165",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/df270eb6-44ed-4165-90e8-97c97ac91439.jpg"
  },
  {
    "id": "g-166",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/e05c695e-f8f4-4dde-9de5-c1c0743e8000.jpg"
  },
  {
    "id": "g-167",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/e0dc4444-6e3d-48b6-bf2f-e2c9d01232a2.jpg"
  },
  {
    "id": "g-168",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/e12ec15e-a74a-4113-a173-de2987b66ef9.jpg"
  },
  {
    "id": "g-169",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/e944bad9-4877-4bc4-aa26-2bd661cb7236.jpg"
  },
  {
    "id": "g-170",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/ead865e4-13a3-472e-814a-b9308512c3b5.jpg"
  },
  {
    "id": "g-171",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/ec1dff50-3089-4117-b3f6-7b5f3f7be96b.jpg"
  },
  {
    "id": "g-172",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/f179fe7c-04fb-42d1-aeda-c02ec0e60ca3.jpg"
  },
  {
    "id": "g-173",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/f3c88995-2082-4e70-a156-c05e1e983ddf.jpg"
  },
  {
    "id": "g-174",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/f5008dff-944c-4021-bd74-83f32a66755f.jpg"
  },
  {
    "id": "g-175",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/f5f3c1b5-0f18-47b2-bb4c-1048e4f158e6.jpg"
  },
  {
    "id": "g-176",
    "category": "inshop",
    "categoryLabel": "Inshop Board",
    "image": "/gallery/coco-cola/Inshop-Brandings.jpg"
  },
  {
    "id": "g-177",
    "category": "stall",
    "categoryLabel": "Stall & Exhibition",
    "image": "/gallery/coco-cola/KIOSK-STALL.jpg"
  },
  {
    "id": "g-178",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/Nonlit-Boards.jpg"
  },
  {
    "id": "g-179",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/Refrigerator-Branding.jpg"
  },
  {
    "id": "g-180",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coco-cola/WhatsApp Image 2026-11-12 at 17.04.19.jpeg"
  },
  {
    "id": "g-181",
    "category": "inshop",
    "categoryLabel": "Inshop Board",
    "image": "/gallery/coolberg/inshop-board.jpg"
  },
  {
    "id": "g-182",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/coolberg/main-board.jpg"
  },
  {
    "id": "g-183",
    "category": "inshop",
    "categoryLabel": "Inshop Board",
    "image": "/gallery/daenyx/inshop-branding.jpg"
  },
  {
    "id": "g-184",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/daenyx/main-board.jpg"
  },
  {
    "id": "g-185",
    "category": "inshop",
    "categoryLabel": "Inshop Board",
    "image": "/gallery/dollar/inshop-boards.jpg"
  },
  {
    "id": "g-186",
    "category": "inshop",
    "categoryLabel": "Inshop Board",
    "image": "/gallery/dollar/inshop-branding.jpg"
  },
  {
    "id": "g-187",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/dollar/main-boards.jpg"
  },
  {
    "id": "g-188",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/fena/Dealer-Branding.jpg"
  },
  {
    "id": "g-189",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/fena/Delhi-Office-Branding.jpg"
  },
  {
    "id": "g-190",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/fena/GSB-Branding.jpg"
  },
  {
    "id": "g-191",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/fena/VAN-BRANDING.jpg"
  },
  {
    "id": "g-192",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/gem/main-board.jpg"
  },
  {
    "id": "g-193",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/kamdehu/main-board.jpg"
  },
  {
    "id": "g-194",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/omron/main-board.jpg"
  },
  {
    "id": "g-195",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/parag/Arch-Gates.jpg"
  },
  {
    "id": "g-196",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/parag/Avvatar-Canopies.jpg"
  },
  {
    "id": "g-197",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/parag/boards.jpg"
  },
  {
    "id": "g-198",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/parag/Delhi-Office-Branding.jpg"
  },
  {
    "id": "g-199",
    "category": "inshop",
    "categoryLabel": "Inshop Board",
    "image": "/gallery/parag/Go-Cheese-Mall-Branding.jpg"
  },
  {
    "id": "g-200",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/parag/main-boards.jpg"
  },
  {
    "id": "g-201",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/parag/Promo-Tables.jpg"
  },
  {
    "id": "g-202",
    "category": "stall",
    "categoryLabel": "Stall & Exhibition",
    "image": "/gallery/parag/Stalls.jpg"
  },
  {
    "id": "g-203",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/Philips/17c6dfc5-dc4f-4d11-bdde-8ce96c4c4b34.jpg"
  },
  {
    "id": "g-204",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/Philips/22aabe30-6408-48ea-9daa-c5d7f85abc4a.jpg"
  },
  {
    "id": "g-205",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/Philips/312f2eae-f07c-472d-a4bd-91aee11313e0.jpg"
  },
  {
    "id": "g-206",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/Philips/397c3351-fcb0-4268-ab64-2c1dfddbd20e.jpg"
  },
  {
    "id": "g-207",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/Philips/3e458349-5c34-43f0-aa9c-348206549491.jpg"
  },
  {
    "id": "g-208",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/Philips/56625d83-757a-4e24-9e4d-1ee9e896041f.jpg"
  },
  {
    "id": "g-209",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/Philips/722283cc-0d67-4c61-8072-8336c5fe75a7.jpg"
  },
  {
    "id": "g-210",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/Philips/7cbe2472-997f-45dd-98a6-300ca888b517.jpg"
  },
  {
    "id": "g-211",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/Philips/9735c629-08d8-4786-9b39-a0ea62a48c62.jpg"
  },
  {
    "id": "g-212",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/Philips/99827026-54fc-43de-b69a-17e16ca36f19.jpg"
  },
  {
    "id": "g-213",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/Philips/9a3f827b-3183-4988-9fed-c94058592011.jpg"
  },
  {
    "id": "g-214",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/Philips/9e606a7e-3e87-4a80-b719-fcdc56c1c9ae.jpg"
  },
  {
    "id": "g-215",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/Philips/ab0a809b-e906-40ee-bf82-5713c439b5b3.jpg"
  },
  {
    "id": "g-216",
    "category": "acp",
    "categoryLabel": "ACP Boards",
    "image": "/gallery/Philips/ACP-Boards.jpg"
  },
  {
    "id": "g-217",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/Philips/b92d6929-ffdf-4cda-9d0f-0342e7988d5a.jpg"
  },
  {
    "id": "g-218",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/Philips/c21c6a98-c1f8-4067-b5da-6f0b3ef4bbf3.jpg"
  },
  {
    "id": "g-219",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/Philips/c6e7481b-a4e8-4621-8761-47d84a8d28e4.jpg"
  },
  {
    "id": "g-220",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/Philips/d4242fb6-7e94-44ac-adbd-a9c2b163cae4.jpg"
  },
  {
    "id": "g-221",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/Philips/e61601ae-aa77-4501-b7f7-dc8b44f675b7.jpg"
  },
  {
    "id": "g-222",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/Philips/e6d1fd7e-06a1-4846-a18a-8c7af7359fae.jpg"
  },
  {
    "id": "g-223",
    "category": "inshop",
    "categoryLabel": "Inshop Board",
    "image": "/gallery/Philips/inshop-branding.jpg"
  },
  {
    "id": "g-224",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/Philips/Lolypop-Brandings.jpg"
  },
  {
    "id": "g-225",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/Philips/main-boards.jpg"
  },
  {
    "id": "g-226",
    "category": "stall",
    "categoryLabel": "Stall & Exhibition",
    "image": "/gallery/Philips/STALL.jpg"
  },
  {
    "id": "g-227",
    "category": "standees",
    "categoryLabel": "Standees",
    "image": "/gallery/Philips/standees.jpg"
  },
  {
    "id": "g-228",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/prestige/main-board.jpg"
  },
  {
    "id": "g-229",
    "category": "stall",
    "categoryLabel": "Stall & Exhibition",
    "image": "/gallery/prestige/outside-stall-board.jpg"
  },
  {
    "id": "g-230",
    "category": "inshop",
    "categoryLabel": "Inshop Board",
    "image": "/gallery/rjpl/Inshop-Branding.jpg"
  },
  {
    "id": "g-231",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/rjpl/main-board.jpg"
  },
  {
    "id": "g-232",
    "category": "inshop",
    "categoryLabel": "Inshop Board",
    "image": "/gallery/shalimar/inshop-branding.jpg"
  },
  {
    "id": "g-233",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/shalimar/main-board.jpg"
  },
  {
    "id": "g-234",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/thubsup/18005cdb-42cc-4249-b2d7-bc390d28a612.jpg"
  },
  {
    "id": "g-235",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/thubsup/8365271e-b6db-4a3b-8b11-b90c74a3c4a1.jpg"
  },
  {
    "id": "g-236",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/thubsup/951234f3-998e-4149-a662-15f8d27471fa.jpg"
  },
  {
    "id": "g-237",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/thubsup/ce18b254-e9fa-4cd2-8e57-0de1d0247527.jpg"
  },
  {
    "id": "g-238",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/thubsup/d4ceb556-b0b5-45c1-96b7-1200f1d7ff2a.jpg"
  },
  {
    "id": "g-239",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/thubsup/e217ca2f-8560-4eed-b59a-382301cf7ed7.jpg"
  },
  {
    "id": "g-240",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/thubsup/e7a4dd77-d74a-4308-87ba-ff684b8e600d.jpg"
  },
  {
    "id": "g-241",
    "category": "main-board",
    "categoryLabel": "Main Board",
    "image": "/gallery/thubsup/f0e0219e-31e2-4a2e-be05-18e16b799711.jpg"
  }
];

export const CATEGORIES = [
  {
    "key": "all",
    "label": "All Signages"
  },
  {
    "key": "main-board",
    "label": "Main Boards"
  },
  {
    "key": "inshop",
    "label": "Inshop Boards"
  },
  {
    "key": "acp",
    "label": "ACP Boards"
  },
  {
    "key": "stall",
    "label": "Stalls & Expos"
  },
  {
    "key": "standees",
    "label": "Standees"
  },
  {
    "key": "other",
    "label": "Transit & Canopies"
  }
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const ITEMS_PER_PAGE = 9;

  // Sync state from URL query on initial load/refresh
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const pageParam = parseInt(params.get("page") || "1", 10);
      if (!isNaN(pageParam) && pageParam > 0) {
        setCurrentPage(pageParam);
      }
    }
  }, []);

  const totalPages = Math.ceil(GALLERY_ITEMS.length / ITEMS_PER_PAGE);
  const pagedItems = GALLERY_ITEMS.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const updateUrl = (page: number) => {
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      if (page > 1) {
        url.searchParams.set("page", page.toString());
      } else {
        url.searchParams.delete("page");
      }
      window.history.replaceState({}, "", url.toString());
    }
  };

  function handlePageChange(page: number) {
    setCurrentPage(page);
    updateUrl(page);
    window.scrollTo({ top: 350, behavior: "smooth" });
  }

  return (
    <>
      <Navbar />

      <main className="pt-[68px] lg:pt-20 bg-white">
        {/* ── HERO BANNER ─────────────────────────────────────────────────── */}
        <section className="relative bg-[#0d0f12] text-white py-16 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#e31e24_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#e31e24]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[2.5px] bg-[#e31e24]" />
                <span className="text-[12px] font-bold tracking-[0.28em] text-[#e31e24] uppercase">
                  Production Showcase
                </span>
              </div>

              <h1 className="text-[40px] sm:text-[52px] lg:text-[62px] font-black leading-[1.05] tracking-tight mb-5">
                OUR PRODUCTION <br />
                <span className="text-[#e31e24]">& INSTALLATION GALLERY.</span>
              </h1>

              <p className="text-gray-300 text-[16px] sm:text-[18px] leading-relaxed font-normal max-w-2xl mb-8">
                Explore real on-site photos of Main Boards, Inshop Boards, ACP Boards, Stalls, Standees, and Transit brandings crafted by Royal Advertising across India.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-gray-400">
                <span className="flex items-center gap-1.5 text-white">
                  <CheckCircle2 size={15} className="text-[#e31e24]" /> 3,000+ Sq. Ft. Plant
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 text-white">
                  <CheckCircle2 size={15} className="text-[#e31e24]" /> Pan-India Installation
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 text-white">
                  <CheckCircle2 size={15} className="text-[#e31e24]" /> 20+ Years Experience
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── GALLERY GRID ────────────────────────────────────────── */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

            {/* Count */}
            <p className="text-[13px] text-gray-400 font-medium mb-10">
              Showing {pagedItems.length} of {GALLERY_ITEMS.length} photos
              {totalPages > 1 && ` · Page ${currentPage} of ${totalPages}`}
            </p>

            {/* Images Grid - Pure image cards (no tags, no text, no hover effect) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pagedItems.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedImage(item)}
                  className="rounded-[26px] overflow-hidden bg-slate-900 shadow-md cursor-pointer border border-gray-100"
                >
                  {/* Image container only */}
                  <div className="relative aspect-[16/11] sm:aspect-[4/3] w-full min-h-[300px] overflow-hidden">
                    <Image
                      src={item.image}
                      alt="Gallery work"
                      fill
                      priority={index < 3}
                      loading={index < 3 ? "eager" : "lazy"}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* ── PAGINATION ── */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />

            {/* CTA banner */}
            <div className="mt-16 p-8 rounded-[24px] bg-gray-50 border border-gray-200/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h4 className="text-[17px] font-bold text-gray-900 mb-1">
                  Need custom signage or branding fabrication?
                </h4>
                <p className="text-[14px] text-gray-500 max-w-2xl">
                  From ACP facade elevation to national inshop rollout and custom exhibition setups, connect with our team for precision execution.
                </p>
              </div>
              <a
                href="tel:+911146252249"
                className="inline-flex items-center gap-2 bg-[#e31e24] hover:bg-[#c01820] text-white text-[14px] font-bold px-7 py-3 rounded-full transition-all flex-shrink-0 shadow-md shadow-red-500/20"
              >
                <Phone size={15} />
                Call +91 11 4625 2249
              </a>
            </div>

          </div>
        </section>

        {/* ── LIGHTBOX MODAL ──────────────────────────────────────────────── */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/92 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors z-10"
              aria-label="Close"
            >
              <X size={22} />
            </button>
            <div
              className="relative max-w-4xl w-full bg-[#121418] rounded-3xl overflow-hidden border border-gray-800 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/10] w-full bg-black">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.categoryLabel}
                  fill
                  sizes="(max-width: 1024px) 95vw, 896px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        )}

      </main>

      <Footer />
    </>
  );
}
