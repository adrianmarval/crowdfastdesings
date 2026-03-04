'use client';

import { ProductImage } from '@/components/product/product-image/ProductImage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './slideshow.css';

interface Props {
  images: string[];
  title: string;
  className?: string;
}

export const ProductMobileSlideshow = ({ images, title, className }: Props) => {
  return (
    <div className={className}>
      <Swiper
        pagination
        autoplay={{
          delay: 2500,
        }}
        modules={[FreeMode, Autoplay, Pagination]}
        className="mySwiper2"
      >
        {images.map((image, index) => (
          <SwiperSlide key={image}>
            <ProductImage width={600} height={500} src={image} alt={title} className="object-contain" priority={index === 0} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
