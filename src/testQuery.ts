import { gql } from '@apollo/client';

const galleryBundleDescriptorQuery = gql`
  query GalleryNewBundleDescriptorQuery($bundleSeoId: String!) {
    bundleDescriptor(bundleSeoId: $bundleSeoId) {
      bpoCode
      seoTitle
      seoDescription
      seoKeywords
      seoBreadcrumbLabel
    }
  }
`;

export default galleryBundleDescriptorQuery;
