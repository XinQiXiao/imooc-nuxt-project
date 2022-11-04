<!--
 * @Author: qixin qixin2@delant.com.cn
 * @Date: 2022-11-03 13:36:11
 * @LastEditors: qixin qixin2@delant.com.cn
 * @LastEditTime: 2022-11-04 14:59:04
 * @FilePath: /imooc-nuxt-project/airbnb-ssr/src/components/layout/headerCommon.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const footerMenu = reactive(
  [
    {
      title: 'airbnb',
      menus: [
        {
          name: 'careers',
          link: 'https://www.airbnb.cn/careers'
        },
        {
          name: 'news',
          link: 'https://www.airbnb.cn/press/news'
        },
        {
          name: 'topic',
          link: 'https://www.airbnb.cn/help/topic/1578/法律条款'
        },
        {
          name: 'diversity',
          link: 'https://www.airbnb.cn/diversity'
        },
        {
          name: 'accessibility',
          link: 'https://www.airbnb.cn/accessibility'
        }
      ]
    },
    {
      title: 'discovery',
      menus: [
        {
          name: 'trustAndSafe',
          link: 'https://www.airbnb.cn/trust'
        },
        {
          name: 'invite',
          link: 'https://www.airbnb.cn/invite?r=6'
        },
        {
          name: 'evection',
          link: 'https://www.airbnb.cn/work?s=footer'
        },
        {
          name: 'magzine',
          link: 'https://airbnbmag.com'
        },
        {
          name: 'airbnborg',
          link: 'https://www.airbnb.org/?locale=zh'
        }
      ]
    },
    {
      title: 'rent',
      menus: [
        {
          name: 'whyRent',
          link: 'https://www.airbnb.cn/host/homes?from_footer=1'
        },
        {
          name: 'hospitality',
          link: 'https://www.airbnb.cn/hospitality'
        },
        {
          name: 'responsibleHosting',
          link: 'https://www.airbnb.cn/help/responsible-hosting'
        },
        {
          name: 'experiences',
          link: 'https://www.airbnb.cn/host/experiences?from_footer=1'
        },
        {
          name: 'resources',
          link: 'https://www.airbnb.cn/resources?traffic_source=footer'
        }
      ]
    },
    {
      title: 'service',
      menus: [
        {
          name: 'help',
          link: 'https://www.airbnb.cn/help?from=footer'
        },
        {
          name: 'neighbors',
          link: 'https://www.airbnb.cn/neighbors'
        }
      ]
    }
  ]
)

</script>

<template>
  <div class="footer-common">
    <div class="inner-footer">
			<ul>
				<li v-for="(item, index) in footerMenu" :key="index">
					<h3>{{ t(`footer['${item.title}']`) }}</h3>
          <a target="_blank" :href="itemInner.link"
            v-for="(itemInner, innerIndex) in item.menus" :key="innerIndex"
          >
            {{ t(`footer['${itemInner.name}']`) }}
          </a>
				</li>
			</ul>
			<div class="copy-right">@ 2022 Harry, Inc . All rights reserved.</div>
		</div>
  </div>
</template>

<style scoped lang="scss">
@import "../../assets/scss/layout/commonFooter.scss";
</style>
