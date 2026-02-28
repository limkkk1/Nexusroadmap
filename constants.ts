import { RoadmapItemData } from './types';
// Updated roadmap data based on the latest Nexus roadmap
export const INITIAL_ROADMAP_DATA: RoadmapItemData[] = [
  {
    id: '1',
    date: '2026年 Q1',
    title: 'USDX 稳定币',
    description:
      'USDX 是 Nexus 的原生美元 —— 一个统一的结算层，它消除稳定币碎片化、简化交易，并统一开发者激励。资金一次部署，到处交易，构建一个更连贯、更资本高效的加密经济体。',
    points: [
      '早期用户与生态合作伙伴注册候补名单',
      '重点进行用户引导与体验反馈',
      '为交易所主网启动做准备'
    ]
  },
  {
    id: '2',
    date: '2026年 Q2',
    title: '社区创世活动',
    description:
      'Nexus 网络通过社区活动启动创世，召集验证者、运营商和早期参与者上线。这标志着从开发阶段过渡到活跃的、由社区引导的网络。',
    points: [
      '验证者与节点运营者加入网络',
      '早期生态参与者协同共建',
      '标志 Nexus 网络进入社区启动阶段'
    ]
  },
  {
    id: '3',
    date: '2026年 Q2',
    title: '主网 EVM 启动',
    description:
      'Nexus Layer 1 主网正式上线，支持生产级别的安全结算与执行，为真实经济活动提供基础设施。',
    points: [
      'EVM 在主网上线并投入生产使用',
      '支持协议级金融与链上执行',
      '为后续交易所与金融应用奠定基础'
    ]
  },
  {
    id: '4',
    date: '2026年 Q3',
    title: '交易所主网',
    description:
      'Nexus 交易所于主网上线，启用实时交易和链上金融活动。这一里程碑标志着 Nexus 作为功能性金融网络的正式运营启动。',
    points: [
      '支持实时交易与链上结算',
      '交易所与 Layer 1 深度集成',
      'Nexus 正式进入金融网络运行阶段'
    ]
  },
  {
    id: '5',
    date: '持续进行',
    title: '构建可验证金融的引擎',
    description:
      'Nexus 持续开发核心基础设施，用于可验证金融，涵盖协议设计、交易所系统和密码学执行。这一持续努力确保网络保持安全、可扩展，并专为金融用例而构建。',
    points: [
      '持续优化协议设计与系统安全',
      '扩展交易与金融基础设施能力',
      '确保网络具备可扩展性与金融级可靠性'
    ]
  }
];
 
 
 
我想去掉所有的point
