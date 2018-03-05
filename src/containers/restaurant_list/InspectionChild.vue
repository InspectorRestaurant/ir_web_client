<template>
  <a :class="className" @click="toggleViolations()">
    <div class="row px-4 py-4">
      <div class="col-sm-3">
        <span class='hover-hide'>
          <i class="fa fa-fw fa-calendar-o"></i>
          {{ howLongAgo}}
        </span>
        <span class='hover-show'>
          <i class="fa fa-fw fa-calendar-o"></i>
          {{ inspection.date }}
        </span>
      </div>
      <div class="col-sm-9 text-right">
        <span class="badge badge-secondary" v-if="inspection.type !== 'Inspection'">
          {{ inspection.type }}
        </span>
        <span class="badge badge-primary" v-b-tooltip.hover.top :title="inspection.comment" v-if="inspection.comment">
          <i class="fa fa-fw fa-comment"></i>
          Comments
        </span>
        <span :class="badge">
          <i :class="icon"></i>
          {{text}}
        </span>
      </div>
    </div>
    <div class="row mt-2" v-if="hasViolations() && expanded">
      <div class="col-sm-12">
        <ul class="list-group list-group-flush">
          <li class="list-group-item" v-for="v in violations">
            <span class="badge badge-secondary">
              {{ v.vid }}
            </span>

            {{ v.desc }}
          </li>
        </ul>
      </div>
    </div>
  </a>
</template>

<!-- // // // //  -->

<script>
import _ from 'lodash'
import moment from 'moment'
export default {
  name: 'inspection_child',
  props: ['inspection'],
  data () {
    return {
      expanded: false
    }
  },
  methods: {
    hasViolations () {
      return this.inspection.violations[0] !== 'None'
    },
    toggleViolations () {
      this.expanded = !this.expanded
    }
  },
  computed: {
    className () {
      let css = ['list-group-item py-0 px-0']
      if (this.hasViolations()) css.push('list-group-item-action')
      return css.join(' ')
    },
    badge () {
      let badge = ['badge']
      if (this.hasViolations()) {
        badge.push('badge-warning')
      } else {
        badge.push('badge-success')
      }
      return badge.join(' ')
    },
    icon () {
      let icon = ['fa', 'fa-fw']
      if (this.hasViolations()) {
        icon.push('fa-warning')
      } else {
        icon.push('fa-check')
      }
      return icon.join(' ')
    },
    text () {
      if (this.hasViolations()) {
        const len = this.inspection.violations.length
        if (len > 1) return `${len} Violations`
        return `${len} Violation`
      } else {
        return 'No Violations'
      }
    },
    hasComment () {
      return this.inspection.comment !== 'None'
    },
    howLongAgo () {
      return moment(this.inspection.date).fromNow()
    },
    violations () {
      return _.filter(this.$store.getters['violation/collection'], (v) => {
        return this.inspection.violations.includes(v.vid)
      })
    }
  }
}
</script>

<style lang="sass" scoped>
  a.list-group-item
    span.hover-hide
      display: block
    span.hover-show
      display: none
    &:hover
      span.hover-hide
        display: none
      span.hover-show
        display: block
</style>
