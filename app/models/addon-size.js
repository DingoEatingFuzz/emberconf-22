import Model, { belongsTo, attr } from '@ember-data/model';
import { cached } from '@glimmer/tracking';
import normalizeFingerprintedAsset from 'emberconf-22/utils/normalize-fingerprinted-asset';

export default class AddonSize extends Model {
  @attr('number')
  appJsSize;

  @attr('number')
  appCssSize;

  @attr('number')
  appJsGzipSize;

  @attr('number')
  appCssGzipSize;

  @attr('number')
  vendorJsSize;

  @attr('number')
  vendorCssSize;

  @attr('number')
  vendorJsGzipSize;

  @attr('number')
  vendorCssGzipSize;

  @attr('number')
  otherJsSize;

  @attr('number')
  otherCssSize;

  @attr('number')
  otherJsGzipSize;

  @attr('number')
  otherCssGzipSize;

  @attr()
  otherAssets;

  @belongsTo('version')
  addonVersion;

  @cached
  get otherAssetsSize() {
    return this.otherJsSize + this.otherCssSize;
  }

  @cached
  get otherAssetsGzipSize() {
    return this.otherJsGzipSize + this.otherCssGzipSize;
  }

  @cached
  get totalJsSize() {
    return this.appJsSize + this.vendorJsSize + this.otherJsSize;
  }

  @cached
  get totalJsGzipSize() {
    return this.appJsGzipSize + this.vendorJsGzipSize + this.otherJsGzipSize;
  }

  @cached
  get totalCssSize() {
    return this.appCssSize + this.vendorCssSize + this.otherCssSize;
  }

  @cached
  get totalCssGzipSize() {
    return this.appCssGzipSize + this.vendorCssGzipSize + this.otherCssGzipSize;
  }

  @cached
  get totalSize() {
    return this.totalJsSize + this.totalCssSize;
  }

  @cached
  get totalGzipSize() {
    return this.totalJsGzipSize + this.totalCssGzipSize;
  }

  @cached
  get hasOtherAssetsFiles() {
    return this.otherAssets.files && this.otherAssets.files.length > 0;
  }

  @cached
  get normalizedOtherAssetFiles() {
    return this.otherAssets.files.map(function (f) {
      return {
        name: normalizeFingerprintedAsset(f.name),
        size: f.size,
        gzipSize: f.gzipSize,
      };
    });
  }
}
