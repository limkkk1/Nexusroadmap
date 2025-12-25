import { RoadmapItemData } from './types';

// Manually translated data based on the user's image request
export const INITIAL_ROADMAP_DATA: RoadmapItemData[] = [
  {
    id: '1',
    date: '2024年Q4 - 2025年Q4',
    title: '大规模测试网',
    description: 'Nexus 发布测试网 I、II 和 III，将其计算网络扩展到超过 300 万用户、500 万个节点和全球 1000 个城市。',
    points: [
      '吸引了超过 100 quadrillion FLOPs 的算力',
      '测试网 III 产生了超过 7000 万笔交易，180 万个验证智能合约和 300 万用户 —— 由 75+ 行业合作伙伴支持',
      '由突破性的 zkVM 3.0 驱动，网络计算吞吐量提高了 100 倍以上'
    ]
  },
  {
    id: '2',
    date: '2025年Q4',
    title: '测试网升级',
    description: '升级测试网 III，为开发者建立 Layer 1 基础，并在主网启动前让基础设施合作伙伴入驻。',
    points: [
      '用户升级到新的 Layer 1 基础设施',
      '开发者可以对 EVM 进行压力测试',
      '独立验证者在初始设置后分阶段加入'
    ]
  },
  {
    id: '3',
    date: '2025年Q4',
    title: '测试网内置金融应用',
    description: '引入内置于 Nexus 内的金融应用 —— 这是测试网 III 中原生集成的可验证基础设施的重要组成部分。',
    points: [
      'EVM 扩展了高性能功能',
      'Nexus OS 更新，允许用户与金融应用进行交互',
      '早期开发者工具发布'
    ]
  },
  {
    id: '4',
    date: '2026年Q1',
    title: '主网上线',
    description: 'Nexus 作为实时的、可验证的金融系统投入生产环境。',
    points: [
      '跨链桥和法币出入金通道自启动起可用',
      '早期开发者可访问并构建内置金融应用',
      '独立验证者与计算网络共同保障链的安全'
    ]
  },
  {
    id: '5',
    date: '2026年Q2',
    title: 'Layer 1 主网内置金融应用',
    description: '升级在主网上线，扩展市场功能并提高性能。',
    points: [
      '高吞吐量、低延迟的内置金融应用上线',
      '内置应用运行在专用的协处理器上',
      '改进的 BFT 共识，实现亚秒级最终性',
      'EVM 和核心引擎的改进'
    ]
  },
  {
    id: '6',
    date: '2026年Q2',
    title: 'zkVM 4.0',
    description: '设计和功能改进，以提高 Nexus zkVM 的速度和性能。',
    points: [
      '用于简化并行处理的批处理技术',
      '用于更快证明的指令排序',
      '用于聚合和有状态计算的递归证明',
      '用于加速常见操作的预编译支持'
    ]
  },
  {
    id: '7',
    date: '持续进行',
    title: '可验证金融的未来',
    description: '扩展协议，扩展 zkVM 证明，并拓宽应用范围。',
    points: [
      '扩展资产对和抵押品类型',
      '基于内置协处理器架构构建的新应用',
      '向完整的端到端 zkVM 证明迈进'
    ]
  }
];
