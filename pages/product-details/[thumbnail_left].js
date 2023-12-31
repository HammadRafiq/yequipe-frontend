import React from 'react';
import CommonLayout from '../../components/shop/common-layout';
import LeftImagePage from './product/leftImagePage';
import ProductTab from './common/product-tab';
import ProductSection from './common/product_section';
import { useRouter } from 'next/router';

const ThumbnailLeft = () => {
    const router = useRouter();
    const id = router.query.thumbnail_left;

    return (
        <CommonLayout parent="home" title="product">
            <LeftImagePage pathId={id} />
            <ProductTab />
            <ProductSection pathId={id} />
        </CommonLayout>
    )
}

export default ThumbnailLeft