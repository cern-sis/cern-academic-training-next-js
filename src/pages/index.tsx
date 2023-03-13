import Image from "next/image";

import { Layout, Carousel } from "antd";

import { GetServerSideProps, NextPage } from "next";
import { LectureProps } from "@/common/interfaces";
import CernToolBar from "@/components/cernToolbar";
import { photos } from "@/common/photos";
import { SearchField } from "@/components/searchField";

interface HomePagePops {
  lectures: LectureProps[];
}

const Home: NextPage<HomePagePops> = ({ lectures }) => {
  return (
    <Layout className="layout" style={{position: "absolute", top:0, left: 0}}>
      <Carousel autoplay dots={false}>
        {photos.map((photo) => {
          return (
            <div key={photo.key}>
              <div className="content">
                <img alt={photo.alt} src={photo.src} />
              </div>
            </div>
          );
        })}
      </Carousel>
      <div>
        {lectures.map((item, key) => (
          <p key={key}>{item.id}</p>
        ))}
      </div>
    </Layout>
  );
};
export const getServerSideProps: GetServerSideProps<
  HomePagePops
> = async () => {
  const res = await fetch(`http://localhost:3000/api`);
  const results = await res.json();
  const lectures = results.results;
  return { props: { lectures } };
};

export default Home;
